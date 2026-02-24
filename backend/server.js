const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');
const { DateTime } = require('luxon');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Timezone for calendar events (default UTC; use e.g. America/New_York for local)
const TIMEZONE = process.env.TIMEZONE || 'UTC';

// Meeting duration: 30 minutes (slots are every 30 min)
const SLOT_DURATION_MS = 30 * 60 * 1000;

// Standard time slots — every 30 min from 09:00 to 17:30 (frontend shows these via /api/available-slots)
const STANDARD_TIME_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
  '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM',
];

// --- Helpers ---

function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .trim();
}

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function parseTimeSlot(timeSlot) {
  if (typeof timeSlot !== 'string') return null;
  const timeMatch = timeSlot.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!timeMatch) return null;
  let hours = parseInt(timeMatch[1], 10);
  const minutes = parseInt(timeMatch[2], 10);
  const period = timeMatch[3].toUpperCase();
  if (minutes > 59 || hours < 1 || hours > 12) return null;
  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;
  return { hours, minutes };
}

/** Format hours (0-23) and minutes as HH:mm:ss for use in dateTime strings */
function formatTime24(parsed) {
  const h = String(parsed.hours).padStart(2, '0');
  const m = String(parsed.minutes).padStart(2, '0');
  return `${h}:${m}:00`;
}

/**
 * Convert (date YYYY-MM-DD, time slot in TIMEZONE) to UTC milliseconds.
 * This is the single source of truth so booking, availability, and calendar all use the same moment.
 */
function slotToUtcMs(dateStr, hours, minutes) {
  const local = DateTime.fromISO(`${dateStr}T${formatTime24({ hours, minutes })}`, { zone: TIMEZONE });
  return local.toUTC().toMillis();
}

/**
 * Build local dateTime string for Google Calendar (same time user sees and we log).
 * Returns e.g. "2025-02-25T10:00:00" for 10:00 AM in TIMEZONE.
 */
function toLocalDateTimeString(dateStr, parsed) {
  return `${dateStr}T${formatTime24(parsed)}`;
}

function isDateInPast(dateStr) {
  const d = new Date(dateStr);
  d.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return d < today;
}

function isConfigValid() {
  return !!(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
    process.env.GOOGLE_PRIVATE_KEY &&
    process.env.GOOGLE_SHEET_ID &&
    process.env.GOOGLE_CALENDAR_ID
  );
}

// Initialize Google Auth (lazy so server can start without credentials for health check)
let sheets;
let calendar;

function getSheets() {
  if (!sheets) {
    if (!isConfigValid()) throw new Error('Google credentials not configured');
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/calendar',
      ],
    });
    sheets = google.sheets({ version: 'v4', auth });
    calendar = google.calendar({ version: 'v3', auth });
  }
  return { sheets, calendar };
}

// --- Health check ---
app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    timestamp: new Date().toISOString(),
    googleConfigured: isConfigValid(),
  });
});

// --- Available slots for a date ---
app.get('/api/available-slots', async (req, res) => {
  try {
    const date = req.query.date;
    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return res.status(400).json({ error: 'Query parameter "date" required (YYYY-MM-DD)' });
    }
    if (isDateInPast(date)) {
      return res.status(400).json({ error: 'Date must be today or in the future' });
    }

    const { calendar: cal } = getSheets();
    const calendarId = process.env.GOOGLE_CALENDAR_ID;
    const dayStart = DateTime.fromISO(date, { zone: TIMEZONE }).startOf('day').toUTC().toISO();
    const dayEnd = DateTime.fromISO(date, { zone: TIMEZONE }).endOf('day').toUTC().toISO();

    const { data: { items = [] } } = await cal.events.list({
      calendarId,
      timeMin: dayStart,
      timeMax: dayEnd,
      singleEvents: true,
      orderBy: 'startTime',
    });

    const busyRanges = (items || []).map((ev) => ({
      start: new Date(ev.start.dateTime || ev.start.date).getTime(),
      end: new Date(ev.end.dateTime || ev.end.date).getTime(),
    }));

    const nowMs = Date.now();
    const available = STANDARD_TIME_SLOTS.filter((slot) => {
      const parsed = parseTimeSlot(slot);
      if (!parsed) return false;
      const slotStart = slotToUtcMs(date, parsed.hours, parsed.minutes);
      const slotEnd = slotStart + SLOT_DURATION_MS;
      if (slotEnd <= nowMs) return false; // slot has already passed — don't show
      const overlaps = busyRanges.some(
        (r) => (slotStart >= r.start && slotStart < r.end) || (slotEnd > r.start && slotEnd <= r.end) || (slotStart <= r.start && slotEnd >= r.end)
      );
      return !overlaps;
    });

    res.json({ date, available });
  } catch (error) {
    console.error('Error fetching available slots:', error);
    res.status(500).json({ error: 'Failed to fetch available slots', details: error.message });
  }
});

// --- Book meeting ---
app.post('/api/book-meeting', async (req, res) => {
  try {
    const raw = req.body || {};
    const name = sanitize(raw.name);
    const companyName = sanitize(raw.companyName);
    const email = sanitize(raw.email);
    const phone = sanitize(raw.phone);
    const goal = sanitize(raw.goal);
    const requirement = sanitize(raw.requirement);
    const date = typeof raw.date === 'string' ? raw.date.trim() : '';
    const timeSlot = typeof raw.timeSlot === 'string' ? raw.timeSlot.trim() : '';

    if (!name || !companyName || !email || !phone || !goal || !requirement || !date || !timeSlot) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return res.status(400).json({ error: 'Invalid date format; use YYYY-MM-DD' });
    }
    if (isDateInPast(date)) {
      return res.status(400).json({ error: 'Date must be today or in the future' });
    }

    const parsed = parseTimeSlot(timeSlot);
    if (!parsed) {
      return res.status(400).json({
        error: 'Invalid time slot; use format like "10:00 AM"',
        allowedSlots: STANDARD_TIME_SLOTS,
      });
    }

    const { sheets: s, calendar: cal } = getSheets();
    const calendarId = process.env.GOOGLE_CALENDAR_ID;
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Same (date + timeSlot) everywhere: frontend display, Sheets log, and Calendar event (30 min duration)
    const startLocal = toLocalDateTimeString(date, parsed);
    const endLocal = DateTime.fromISO(startLocal, { zone: TIMEZONE }).plus({ minutes: 30 }).toFormat("yyyy-MM-dd'T'HH:mm:ss");
    const slotStartMs = slotToUtcMs(date, parsed.hours, parsed.minutes);
    const slotEndMs = slotStartMs + SLOT_DURATION_MS;

    // Check availability first
    const dayStart = DateTime.fromISO(date, { zone: TIMEZONE }).startOf('day').toUTC().toISO();
    const dayEnd = DateTime.fromISO(date, { zone: TIMEZONE }).endOf('day').toUTC().toISO();
    const { data: { items = [] } } = await cal.events.list({
      calendarId,
      timeMin: dayStart,
      timeMax: dayEnd,
      singleEvents: true,
    });
    const conflict = (items || []).some((ev) => {
      const start = new Date(ev.start.dateTime || ev.start.date).getTime();
      const end = new Date(ev.end.dateTime || ev.end.date).getTime();
      return (slotStartMs >= start && slotStartMs < end) || (slotEndMs > start && slotEndMs <= end) || (slotStartMs <= start && slotEndMs >= end);
    });
    if (conflict) {
      return res.status(409).json({ error: 'This time slot is no longer available' });
    }

    // Create calendar event at the exact time the user selected (same as displayed and logged)
    const event = {
      summary: `Meeting with ${name} - ${companyName}`,
      description: `Goal: ${goal}\n\nRequirement: ${requirement}`,
      start: { dateTime: startLocal, timeZone: TIMEZONE },
      end: { dateTime: endLocal, timeZone: TIMEZONE },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 30 },
        ],
      },
    };

    await cal.events.insert({
      calendarId,
      resource: event,
    });

    // Then add to Google Sheets
    await s.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:I',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[
          new Date().toISOString(),
          name,
          companyName,
          email,
          phone,
          goal,
          requirement,
          date,
          timeSlot,
        ]],
      },
    });

    res.json({ success: true, message: 'Booking saved successfully' });
  } catch (error) {
    console.error('Error booking meeting:', error);
    res.status(500).json({ error: 'Failed to book meeting', details: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

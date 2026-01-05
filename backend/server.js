const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Google Auth
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/calendar',
  ],
});

const sheets = google.sheets({ version: 'v4', auth });
const calendar = google.calendar({ version: 'v3', auth });

// Booking endpoint
app.post('/api/book-meeting', async (req, res) => {
  try {
    const { name, companyName, email, phone, goal, requirement, date, timeSlot } = req.body;

    if (!name || !companyName || !email || !phone || !goal || !requirement || !date || !timeSlot) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Add to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
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

    // Parse time slot (e.g., "10:00 AM" -> 10:00)
    const timeMatch = timeSlot.match(/(\d+):(\d+)\s*(AM|PM)/i);
    let hours = parseInt(timeMatch[1]);
    const minutes = parseInt(timeMatch[2]);
    const period = timeMatch[3].toUpperCase();

    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;

    // Create calendar event
    const eventStart = new Date(date);
    eventStart.setHours(hours, minutes, 0, 0);
    const eventEnd = new Date(eventStart);
    eventEnd.setHours(hours + 1, minutes, 0, 0); // 1 hour meeting

    const event = {
      summary: `Meeting with ${name} - ${companyName}`,
      description: `Goal: ${goal}\n\nRequirement: ${requirement}`,
      start: {
        dateTime: eventStart.toISOString(),
        timeZone: 'UTC',
      },
      end: {
        dateTime: eventEnd.toISOString(),
        timeZone: 'UTC',
      },
      attendees: [
        { email: email },
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 30 },
        ],
      },
    };

    await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      resource: event,
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


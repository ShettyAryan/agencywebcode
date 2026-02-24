# Backend API for Booking System

This backend handles Google Sheets and Google Calendar integration for the booking system.

## Setup

1. Install dependencies:
```bash
npm install
```
Or manually: `npm install express googleapis dotenv cors`

2. Create a service account in Google Cloud Console:
   - Go to Google Cloud Console
   - Create a new project or select existing
   - Enable Google Sheets API and Google Calendar API
   - Create a service account
   - Download the JSON key file
   - Share your Google Sheet with the service account email
   - Share your Google Calendar with the service account email

3. Create `.env` from the example:
```bash
cp .env.example .env
```
Then edit `.env` with your values (see `.env.example` for all keys).

4. Run the server:
```bash
npm start
```
Or: `node server.js`

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check; returns `googleConfigured` and timestamp. |
| GET | `/api/available-slots?date=YYYY-MM-DD` | Returns `{ date, available }` — list of available time slot strings for that day. |
| POST | `/api/book-meeting` | Book a meeting (body: name, companyName, email, phone, goal, requirement, date, timeSlot). Creates calendar event and appends row to Sheet. |

- **Validation:** Email format, date not in past, time slot format (e.g. `10:00 AM`), and availability are checked before booking.
- **Conflicts:** If the chosen slot is already taken, the API returns `409` with message "This time slot is no longer available".


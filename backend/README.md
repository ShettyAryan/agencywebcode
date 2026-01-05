# Backend API for Booking System

This backend handles Google Sheets and Google Calendar integration for the booking system.

## Setup

1. Install dependencies:
```bash
npm install express googleapis dotenv cors
```

2. Create a service account in Google Cloud Console:
   - Go to Google Cloud Console
   - Create a new project or select existing
   - Enable Google Sheets API and Google Calendar API
   - Create a service account
   - Download the JSON key file
   - Share your Google Sheet with the service account email
   - Share your Google Calendar with the service account email

3. Create `.env` file:
```
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_google_sheet_id
GOOGLE_CALENDAR_ID=your_calendar_id
PORT=3001
```

4. Run the server:
```bash
node server.js
```


# Booking System Setup Guide

## Frontend Setup (EmailJS)

1. **Create EmailJS Account**:
   - Go to https://www.emailjs.com/
   - Sign up for a free account
   - Create a service (e.g., "Gmail")
   - Create an email template with these variables:
     - `{{to_name}}` - Client name
     - `{{company_name}}` - Company name
     - `{{goal}}` - Client goal
     - `{{requirement}}` - Requirements
     - `{{meeting_date}}` - Meeting date
     - `{{reply_to}}` - Client email

2. **Get EmailJS Credentials**:
   - Service ID: Found in EmailJS dashboard
   - Template ID: Found in your template settings
   - Public Key: Found in Account > API Keys

3. **Create `.env` file in frontend directory**:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_API_URL=http://localhost:3001/api
```

**Note**: Vite uses `VITE_` prefix for environment variables (not `REACT_APP_`)

## Backend Setup (Google Sheets & Calendar)

1. **Create Google Cloud Project**:
   - Go to https://console.cloud.google.com/
   - Create a new project
   - Enable "Google Sheets API" and "Google Calendar API"

2. **Create Service Account**:
   - Go to IAM & Admin > Service Accounts
   - Create a new service account
   - Download the JSON key file
   - Note the service account email

3. **Set up Google Sheet**:
   - Create a new Google Sheet
   - Add headers in row 1: Timestamp, Name, Company Name, Email, Goal, Requirement, Date
   - Share the sheet with the service account email (Viewer or Editor)
   - Copy the Sheet ID from the URL (between `/d/` and `/edit`)

4. **Set up Google Calendar**:
   - Create a new calendar or use existing
   - Share it with the service account email (Make changes to events)
   - Get the Calendar ID (Settings > Integrate calendar > Calendar ID)

5. **Backend Configuration**:
   - Create `backend` directory
   - Copy `server.js` from this repo
   - Install dependencies: `npm install express googleapis dotenv cors`
   - Create `.env` file:
```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_google_sheet_id
GOOGLE_CALENDAR_ID=your_calendar_id
PORT=3001
```
   - Run: `node server.js`

## Testing

1. Start the backend server: `cd backend && node server.js`
2. Start the frontend: `cd frontend && npm run dev`
3. Navigate to `/contact` and fill out the form
4. Check your email for confirmation
5. Check Google Sheet for the entry
6. Check Google Calendar for the event


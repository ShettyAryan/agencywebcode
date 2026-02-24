# Deploying ConstructDev: Frontend (Vercel) + Backend (Leapcell)

This project has a **monorepo** layout: `frontend/` (Vite + React) and `backend/` (Node + Express). Deploy the frontend on **Vercel** and the backend on **Leapcell**, then connect them with env vars.

---

## 1. Deploy the backend on Leapcell

1. **Push your code** to GitHub (including the `backend` folder).

2. **Leapcell Dashboard** → [leapcell.io/dashboard](https://leapcell.io/dashboard) → **New Service**.

3. **Connect the repo** that contains this project (connect GitHub if needed).

4. **Configure the service**:

   | Field | Value |
   |--------|--------|
   | **Root Directory** | `backend` *(so Leapcell runs from the backend folder)* |
   | **Runtime** | Node.js (e.g. 18 or 20) |
   | **Build Command** | `npm install` |
   | **Start Command** | `node server.js` |
   | **Port** | `8080` |

5. **Environment variables** (Service → Settings → Environment Variables). Add:

   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY` (paste the full key; use `\n` for newlines if required)
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_CALENDAR_ID`
   - `PORT` = `8080`
   - `TIMEZONE` (optional, e.g. `America/New_York`)

6. **Deploy** and copy the backend URL, e.g. `https://your-service.leapcell.dev`.  
   The API base is that URL with no path (e.g. `https://your-service.leapcell.dev`). Your frontend will call `https://your-service.leapcell.dev/api/health`, `https://your-service.leapcell.dev/api/available-slots`, `https://your-service.leapcell.dev/api/book-meeting`).

---

## 2. Deploy the frontend on Vercel

1. **Vercel** → [vercel.com](https://vercel.com) → **Add New** → **Project** → import your GitHub repo.

2. **Configure the project**:

   | Field | Value |
   |--------|--------|
   | **Root Directory** | `frontend` *(click Edit, set to `frontend`)* |
   | **Framework Preset** | Vite |
   | **Build Command** | `npm run build` (default) |
   | **Output Directory** | `dist` (default for Vite) |

3. **Environment variables** (Project → Settings → Environment Variables). Add:

   | Name | Value |
   |------|--------|
   | `VITE_API_URL` | `https://your-service.leapcell.dev/api` *(your Leapcell backend URL + `/api`)* |
   | `VITE_EMAILJS_SERVICE_ID` | your EmailJS service ID |
   | `VITE_EMAILJS_TEMPLATE_ID` | your EmailJS template ID |
   | `VITE_EMAILJS_PUBLIC_KEY` | your EmailJS public key |

4. **Deploy**. Your site will be at `https://your-project.vercel.app` (or your custom domain).

---

## 3. CORS and API base URL

- The backend uses `cors()` with no origin restriction, so your Vercel domain can call it.
- Frontend requests go to `VITE_API_URL`:
  - `GET {VITE_API_URL}/available-slots?date=...`
  - `POST {VITE_API_URL}/book-meeting`

So `VITE_API_URL` must be exactly your Leapcell base URL + `/api`, e.g. `https://your-service.leapcell.dev/api` (no trailing slash).

---

## 4. Checklist

- [ ] Backend deployed on Leapcell with Root Directory = `backend`, Port = 8080, env vars set.
- [ ] Frontend deployed on Vercel with Root Directory = `frontend`, env vars set.
- [ ] `VITE_API_URL` points to `https://<your-leapcell-service>.leapcell.dev/api`.
- [ ] Test: open the Vercel site → Contact/booking → select date/time and submit; check EmailJS confirmation and Google Sheet/Calendar.

---

## 5. Optional: restrict CORS in production

To allow only your Vercel domain to call the backend, in `backend/server.js` you can replace `app.use(cors())` with:

```js
const allowedOrigin = process.env.FRONTEND_URL || 'https://your-project.vercel.app';
app.use(cors({ origin: allowedOrigin }));
```

Then set `FRONTEND_URL` in Leapcell to your real frontend URL (e.g. `https://constructdev.com`).

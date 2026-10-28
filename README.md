# Prachi Hodiwala — MERN Portfolio (No Database)

A responsive personal portfolio built with React + Vite, Node.js, and Express.
**No database, no MongoDB, and no contact form.** Personal details are stored in the frontend `client/src/data.js` file.

## Requirements
- Node.js (LTS recommended)
- VS Code

## Run in VS Code

### 1. Open the project folder
Extract the ZIP, then open `prachi-mern-portfolio` in VS Code.

### 2. Start the React frontend
Open a VS Code terminal and run:

```bash
cd client
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

### 3. Start the Express backend (optional demo API)
Open a **second** terminal and run:

```bash
cd server
npm install
npm run dev
```

The API runs at `http://localhost:5000` and exposes `/api/health`.
The portfolio itself does not need the backend to display your information.

## Personalize before publishing
Edit `client/src/data.js`:
- Replace `YOUR_EMAIL@example.com` with your real email.
- Replace the LinkedIn placeholder with your actual profile URL.
- Update education/institute details if needed.
- Add real live-demo URLs when you deploy projects.
- Keep the hackathon certificate details truthful; replace the placeholder with the real event name.

## Project links
The portfolio currently links to:
- https://github.com/prachihodiwala/portfolio-website
- https://github.com/prachihodiwala/Regional-Phishing-SMS-Reporting

The Photography Studio project currently has no repository/live-demo URL, so the UI will not show a broken link.

## Important
This project intentionally has no database. Express is included as a lightweight API demonstration, not for storing messages or user data.

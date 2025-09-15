# SaaS Contracts Dashboard

A simple **React + Vite** dashboard application styled with **Tailwind CSS**, built for learning and experimentation.  
This app is deployed using **GitHub Pages**.

---

## 📦 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/saas-contracts-dashboard.git
cd saas-contracts-dashboard


2. Install dependencies
npm install

3. Run locally
npm run dev

Now open your browser at:
http://localhost:5173

6. Deploy to GitHub Pages

Install the deploy helper (only once):

npm install gh-pages --save-dev


Add this to your package.json:

{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"
  }
}


Use this vite.config.ts so GitHub Pages serves your app correctly:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace `saas-contracts-dashboard` with your repo name if different
export default defineConfig({
  base: "/saas-contracts-dashboard/",
  plugins: [react()],
})


Deploy:

npm run build
npm run deploy


Your app will be live at:

https://<your-username>.github.io/saas-contracts-dashboard/

🛠 Tech Stack Choices

React 19 → UI components

Vite 7 → Development/build tool

Tailwind CSS 4 → Styling

React Router DOM 7 → Routing

TypeScript 5 → Type safety

GitHub Pages + gh-pages → Deployment

✅ Assumptions Made

This project is frontend-only (no backend APIs).

Hosting is done on GitHub Pages (not Netlify/Vercel).

Node.js v16+ is required.

Repository name is saas-contracts-dashboard, so the Vite base path matches.

Deployment branch will be created as gh-pages automatically by the deploy script.
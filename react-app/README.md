# 📊 Business Dashboard

A modern, responsive business dashboard built with React, Vite, Tailwind CSS, and Recharts. Includes interactive charts, transaction tables, and KPI cards.

---

## 🚀 Features

- **Responsive layout** for desktop and mobile
- **Interactive charts** (Line, Radar) with Recharts
- **Recent transactions table** with status chips
- **Reusable components** and clean structure

---

## 📂 Project Structure

```
react-app/
├── index.html
├── package.json
├── src/
│   ├── App.jsx
│   ├── Home.jsx
│   ├── global.css
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── ActivityGraph.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Grid.jsx
│   │   │   ├── RecentTransaction.jsx
│   │   │   ├── StatCards.jsx
│   │   │   └── UsageRadar.jsx
│   │   └── sidebar/
│   │       ├── AccountToggle.jsx
│   │       ├── CommandMenu.jsx
│   │       ├── Plan.jsx
│   │       ├── RouteSelect.jsx
│   │       └── Search.jsx
│   ├── data/
│   │   ├── activity.js
│   │   └── transactions.js
│   └── main.jsx
├── vite.config.js
└── .prettierrc
```

---

## 🛠️ Tech Stack

- React + Vite
- Tailwind CSS
- Recharts
- React Icons

---

## 📦 Getting Started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 📜 License

MIT
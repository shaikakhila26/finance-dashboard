# 💰 Finance Dashboard UI

A clean and interactive finance dashboard built to help users track financial activity, explore transactions, and gain insights into spending patterns.

---

## 🚀 Live Demo
(Attach your deployed link here - Vercel)

---

## 📦 Tech Stack

- React (Vite)
- Tailwind CSS
- Recharts (Data Visualization)
- Context API (State Management)
- Framer Motion (Animations)

---

## ✨ Features

### 📊 Dashboard Overview
- Total Balance, Income, Expenses summary cards
- Line chart for balance trend (time-based visualization)
- Pie chart for spending breakdown (category-based visualization)

### 💳 Transactions
- View transaction list with date, category, amount, and type
- Search transactions
- Filter by type (income/expense)
- Sort by latest / high / low amount
- Export transactions as JSON
- Admin can delete transactions

### 🔐 Role-Based UI
- Role switch: Admin / Viewer
- Viewer: Read-only access
- Admin: Add and delete transactions

### 📈 Insights
- Highest spending category
- Monthly analysis (best month based on transaction volume)

---

## 🧠 State Management
- Managed using React Context API
- Handles transactions, filters, and role

---

## 🎨 UI/UX
- Clean and responsive design
- Mobile-friendly layout
- Smooth animations using Framer Motion
- Handles empty states gracefully

---

## ⚡ Optional Enhancements Implemented
- Local storage persistence
- Export functionality (JSON)
- Animations
- Advanced filtering & sorting

---

## 🛠️ Setup Instructions

```bash
npm install
npm run dev
# 💰 Personal Finance Visualizer

A full-stack web application to track and visualize your personal income and expenses. Built using **Next.js (App Router)**, **MongoDB**, and **Express.js** — styled with **ShadCN UI** and visualized with **Recharts**.

---

## 🌟 Features

### ✅ Stage 1: Transaction Tracker
- Add, edit, and delete transactions
- Store details like amount, date, description, and category
- All data saved to MongoDB

### ✅ Stage 2: Categories
- Filter transactions by category
- View category-wise spending summary
- Visualize category data using **Pie Chart**
- View monthly trends using a **Bar Chart**

### ✅ Stage 3: Budgeting
- Set a monthly budget limit
- Track real-time spending vs. budget
- See a warning when budget is exceeded
- Visual **budget progress bar**

---

## 🛠️ Tech Stack

| Frontend         | Backend          | Database    | UI Library     | Charts        |
|------------------|------------------|-------------|----------------|---------------|
| Next.js 14 (App Router) | Node.js + Express.js | MongoDB Atlas | ShadCN UI      | Recharts      |

---

## 📂 Folder Structure

project-root/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── index.js
├── frontend/
│ ├── app/
│ │ └── page.jsx
│ ├── components/
│ │ ├── TransactionForm.jsx
│ │ ├── TransactionList.jsx
│ │ ├── CategorySummary.jsx
│ │ ├── CategoryPieChart.jsx
│ │ ├── TransactionChart.jsx
│ │ ├── BudgetBar.jsx
│ │ └── EmptyState.jsx
│ └── services/
│ └── api.js



---

## 🔗 Live URLs

- 🌐 **Frontend (Vercel)**: [https://your-vercel-url.vercel.app](https://yard-stick-repo.vercel.app/)
- 🔗 **Backend (Render)**: [https://your-backend-url.onrender.com](https://yardstick-repo-1.onrender.com)

> Make sure your frontend `api.js` uses the correct base URL.

---

## 🚀 Getting Started Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

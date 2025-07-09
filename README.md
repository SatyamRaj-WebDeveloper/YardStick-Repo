# 💰 Personal Finance Visualizer

A simple and elegant web application that allows users to track their income and expenses visually. Built as part of my internship assignment, the app includes the ability to add, update, delete, and categorize financial transactions.

---

## 🚀 Features

- ✅ Add new transactions (income or expense)
- 🔄 Update existing transactions
- ❌ Delete transactions
- 📅 Date-wise tracking
- 📊 Visual representation using charts
- 💡 Built with ShadCN UI, Next.js, MongoDB, and Recharts

---

## 📁 Project Structure
YardStick/
├── backend/ # Express + MongoDB backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── index.js
│ └── ...
├── frontend/ # Next.js frontend
│ ├── app/
│ ├── components/
│ ├── services/ # api.js to call backend
│ ├── ui/ # ShadCN UI components
│ └── ...

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TailwindCSS, ShadCN, Axios, Recharts
- **Backend**: Express.js, MongoDB, Mongoose
- **Deployment**: 
  - Frontend: Vercel
  - Backend: Render

---

## 🔗 Live Demo

- 🔥 Frontend: [https://your-vercel-url.vercel.app](
---

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TailwindCSS, ShadCN, Axios, Recharts
- **Backend**: Express.js, MongoDB, Mongoose
- **Deployment**: 
  - Frontend: Vercel
  - Backend: Render

---

## 🔗 Live Demo

- 🔥 Frontend: [https://your-vercel-url.vercel.app]((https://yard-stick-repo.vercel.app/))
- ⚙️ Backend: [https://yardstick-repo-1.onrender.com](https://yardstick-repo-1.onrender.com)

---

## 🧪 API Endpoints

All endpoints are prefixed with `/api/v1/transaction`

| Method | Endpoint                     | Description              |
|--------|------------------------------|--------------------------|
| POST   | `/addTransaction`            | Add new transaction      |
| GET    | `/getTransactions`           | Get all transactions     |
| PUT    | `/Update/:id`                | Update a transaction     |
| DELETE | `/deleteTransaction/:id`     | Delete a transaction     |

---

## 🧰 Getting Started Locally

### Backend
```bash
cd backend
npm install
node index.js
)
- ⚙️ Backend: [https://yardstick-repo-1.onrender.com](https://yardstick-repo-1.onrender.com)

---

## 🧪 API Endpoints

All endpoints are prefixed with `/api/v1/transaction`

| Method | Endpoint                     | Description              |
|--------|------------------------------|--------------------------|
| POST   | `/addTransaction`            | Add new transaction      |
| GET    | `/getTransactions`           | Get all transactions     |
| PUT    | `/Update/:id`                | Update a transaction     |
| DELETE | `/deleteTransaction/:id`     | Delete a transaction     |

---

## 🧰 Getting Started Locally

### Backend
```bash
cd backend
npm install
node index.js

import axios from 'axios';

// ⚠️ Change the baseURL if your backend is deployed
const API = axios.create({
  baseURL: 'http://localhost:5000/api/transactions',
});

// ➕ Add a new transaction
export const addTransaction = (data) => API.post('/addTransaction', data);

// 📥 Get all transactions
export const getTransactions = () => API.get('/getTransactions');

// 🔁 Update a transaction by ID
export const updateTransaction = (id, data) => API.put(`/Update/${id}`, data);

// ❌ Delete a transaction by ID
export const deleteTransaction = (id) => API.delete(`/deleteTransaction/${id}`);

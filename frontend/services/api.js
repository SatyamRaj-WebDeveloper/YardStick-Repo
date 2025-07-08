import axios from 'axios';

const API = axios.create({
  baseURL: 'https://yardstick-repo-1.onrender.com/api/v1/transaction',
});
export const addTransaction = (data) => API.post('/addTransaction', data);


export const getAllTransactions = () => API.get('/getTransactions');


export const updateTransaction = (id, data) => API.put(`/Update/${id}`, data);

export const deleteTransaction = (id) => API.delete(`/deleteTransaction/${id}`);

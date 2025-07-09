'use client';

import { useEffect, useState } from 'react';
import Container from "../../components/Conatiner";
import TransactionForm from "../../components/TransactionForm";
import TransactionList from "../../components/TransactionList";
import TransactionChart from "../../components/TransactionChart";
import EmptyState from "../../components/EmptyState";
import CategorySummary from "../../components/CategorySummary";
import CategoryPieChart from "../../components/CategoryPieChart";
import BudgetBar from "../../components/BudgetBar";

import { getAllTransactions, deleteTransaction } from "../../services/api.js";

export default function HomePage() {
  const [transactions, setTransactions] = useState([]);
  const [editTxn, setEditTxn] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [budget, setBudget] = useState('');

  const fetchTransactions = async () => {
    try {
      const res = await getAllTransactions();
      setTransactions(res.data.data);
    } catch (err) {
      console.error("Failed to fetch transactions", err.message);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleAdd = (newTxn) => {
    setTransactions((prev) => [newTxn, ...prev]);
  };

  const handleEdit = (txn) => {
    setEditTxn(txn);
  };

  const handleUpdate = (updatedTxn) => {
    const updatedList = transactions.map((txn) =>
      txn._id === updatedTxn._id ? updatedTxn : txn
    );
    setTransactions(updatedList);
    setEditTxn(null);
  };

  const handleDelete = async (id) => {
    try {
      await deleteTransaction(id);
      setTransactions((prev) => prev.filter((txn) => txn._id !== id));
    } catch (err) {
      console.error("Delete failed", err.message);
    }
  };

  const categories = ['All', ...new Set(transactions.map((txn) => txn.category || 'Uncategorized'))];
  const filteredTransactions =
    selectedCategory === 'All'
      ? transactions
      : transactions.filter((txn) => txn.category === selectedCategory);

  const totalSpent = filteredTransactions.reduce((sum, txn) => sum + Number(txn.amount), 0);

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-8 text-center">💰 Personal Finance Visualizer</h1>

      {/* Budget Input */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <label className="font-semibold">Set Monthly Budget (₹):</label>
        <input
  type="number"
  className="border px-3 py-2 rounded w-full sm:w-64"
  placeholder="e.g., 20000"
  value={budget}
  onChange={(e) => setBudget(e.target.value)}
/>
      </div>

      {/* Budget Progress Bar */}
      <BudgetBar totalSpent={totalSpent} budget={budget} />

      {/* Transaction Form */}
      <TransactionForm
        onAdd={handleAdd}
        editData={editTxn}
        onUpdate={handleUpdate}
        onCancelEdit={() => setEditTxn(null)}
      />

      {/* Category Filter */}
      <div className="my-6">
        <label htmlFor="category-filter" className="mr-2 font-semibold">Filter by Category:</label>
        <select
          id="category-filter"
          className="border px-3 py-2 rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Category Summary */}
      <CategorySummary transactions={filteredTransactions} />

      {/* Category Pie Chart */}
      <CategoryPieChart transactions={filteredTransactions} />

      {/* Transaction List and Monthly Chart */}
      {filteredTransactions.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <TransactionList
            transactions={filteredTransactions}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
          <TransactionChart transactions={filteredTransactions} />
        </>
      )}
    </Container>
  );
}

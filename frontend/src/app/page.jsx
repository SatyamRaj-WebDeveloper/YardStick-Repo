'use client';

import { useEffect, useState } from 'react';
import Container from "../../components/Conatiner";
import TransactionForm from "../../components/TransactionForm";
import TransactionList from "../../components/TransactionList";
import TransactionChart from "../../components/TransactionChart";
import EmptyState from "../../components/EmptyState";
import CategorySummary from "../../components/CategorySummary";
import { getAllTransactions, deleteTransaction } from "../../services/api.js";

export default function HomePage() {
  const [transactions, setTransactions] = useState([]);
  const [editTxn, setEditTxn] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const fetchTransactions = async () => {
    try {
      const res = await getAllTransactions();
      console.log(res);
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

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6">💰 Personal Finance Visualizer</h1>

      <TransactionForm
        onAdd={handleAdd}
        editData={editTxn}
        onUpdate={handleUpdate}
        onCancelEdit={() => setEditTxn(null)}
      />

      {/* Category Filter */}
      <div className="my-4">
        <label htmlFor="category-filter" className="mr-2 font-medium">
          Filter by Category:
        </label>
        <select
          id="category-filter"
          className="border p-2 rounded"
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

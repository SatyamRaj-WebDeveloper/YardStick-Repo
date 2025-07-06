'use client';
import { useState } from 'react';
import { addTransaction } from '../services/api.js';
import { Input } from "../src/components/ui/input";
import { Button } from "../src/components/ui/button";
import { Card, CardContent } from "../src/components/ui/card";

export default function TransactionForm({ onAdd }) {
  const [formData, setFormData] = useState({
    amount: '',
    date: '',
    description: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addTransaction(formData);
      onAdd(res.data);
      setFormData({ amount: '', date: '', description: '', category: '' });
    } catch (error) {
      console.error("Add failed:", error.message);
    }
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-4 space-y-4">
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input name="amount" type="number" placeholder="Amount" value={formData.amount} onChange={handleChange} required />
          <Input name="date" type="date" value={formData.date} onChange={handleChange} required />
          <Input name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
          <Input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
          <Button type="submit">Add Transaction</Button>
        </form>
      </CardContent>
    </Card>
  );
}

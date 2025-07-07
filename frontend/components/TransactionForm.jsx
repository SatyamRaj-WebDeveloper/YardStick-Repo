'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '../src/components/ui/input';
import { Button } from '../src/components/ui/button';
import { toast } from 'sonner';
import { addTransaction, updateTransaction } from '../services/api.js';

const TransactionForm = ({ onAdd, editData, onUpdate, onCancelEdit }) => {
  const [formData, setFormData] = useState({
    amount: '',
    date: '',
    description: '',
    category: '',
  });

  useEffect(() => {
    if (editData && typeof editData === 'object') {
      setFormData({
        amount: editData.amount || '',
        date: editData.date ? editData.date.split('T')[0] : '',
        description: editData.description || '',
        category: editData.category || '',
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.amount || !formData.date || !formData.description) {
      toast.error('Please fill all required fields.');
      return;
    }

    try {
      if (editData && editData._id) {
        const res = await updateTransaction(editData._id, formData);
        toast.success('Transaction updated successfully!');
        onUpdate(res.data.data);
      } else {
        const res = await addTransaction(formData);
        toast.success('Transaction added!');
        onAdd(res.data);
      }

      // Reset form
      setFormData({
        amount: '',
        date: '',
        description: '',
        category: '',
      });

      if (onCancelEdit) onCancelEdit();

    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      <Input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />
      <Input
        type="date"
        name="date"
        placeholder="Date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />

      <div className="col-span-full flex gap-2">
        <Button type="submit">
          {editData && editData._id ? 'Update Transaction' : 'Add Transaction'}
        </Button>
        {editData && (
          <Button type="button" variant="outline" onClick={onCancelEdit}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
};

export default TransactionForm;

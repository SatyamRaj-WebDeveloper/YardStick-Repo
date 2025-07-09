'use client';

import React from 'react';

const CategorySummary = ({ transactions }) => {
  const summary = Object.entries(
    transactions.reduce((acc, txn) => {
      const cat = txn.category || 'Uncategorized';
      acc[cat] = (acc[cat] || 0) + Number(txn.amount);
      return acc;
    }, {})
  );

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Category Summary</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {summary.map(([cat, total], idx) => (
          <div key={idx} className="p-4 border rounded shadow-sm">
            <p className="font-medium">{cat}</p>
            <p className="text-lg font-bold">₹{total}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySummary;

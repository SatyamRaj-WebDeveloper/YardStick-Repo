'use client';

import React from 'react';

const BudgetBar = ({ totalSpent, budget }) => {
  const percentage = Math.min((totalSpent / budget) * 100, 100);

  const barColor = totalSpent > budget ? 'bg-red-500' : 'bg-green-500';

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold mb-2">Budget Tracker</h2>
      <p className="mb-2">Budget: ₹{budget} | Spent: ₹{totalSpent}</p>
      <div className="w-full bg-gray-200 rounded-full h-6">
        <div
          className={`h-6 rounded-full ${barColor}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {totalSpent > budget && (
        <p className="text-red-600 mt-2 font-semibold">⚠️ You have exceeded your budget!</p>
      )}
    </div>
  );
};

export default BudgetBar;

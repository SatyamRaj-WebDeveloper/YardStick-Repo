'use client';

import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const COLORS = ['#0088FE', '#FF8042', '#FFBB28', '#00C49F', '#845EC2'];

const CategoryPieChart = ({ transactions }) => {
  const data = Object.entries(
    transactions.reduce((acc, txn) => {
      const cat = txn.category || 'Uncategorized';
      acc[cat] = (acc[cat] || 0) + Number(txn.amount);
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  if (data.length === 0) return null;

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold mb-2">Expenses by Category</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={100}>
            {data.map((_, i) => (
              <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryPieChart;

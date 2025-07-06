'use client';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";
import { Card, CardContent } from "../src/components/ui/card";

function groupByMonth(transactions) {
  const map = {};
  transactions.forEach((txn) => {
    const month = txn.date.slice(0, 7); // "YYYY-MM"
    map[month] = (map[month] || 0) + txn.amount;
  });
  return Object.entries(map).map(([month, total]) => ({ month, total }));
}

export default function TransactionChart({ transactions }) {
  const data = groupByMonth(transactions);

  return (
    <Card className="mt-6">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold mb-4">Monthly Expenses</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#8884d8" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

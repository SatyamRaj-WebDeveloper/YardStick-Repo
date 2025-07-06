'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { deleteTransaction } from "../services/api";

export default function TransactionList({ transactions, onDelete }) {
  return (
    <div className="space-y-3">
      {transactions.map((txn) => (
        <Card key={txn._id}>
          <CardContent className="flex justify-between items-center p-4">
            <div>
              <p className="font-semibold">₹{txn.amount}</p>
              <p className="text-sm text-muted-foreground">
                {txn.description} - {txn.category || "Uncategorized"}
              </p>
              <p className="text-xs">{txn.date.slice(0, 10)}</p>
            </div>
            <Button
              variant="destructive"
              onClick={() => onDelete(txn._id)}
              size="icon"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

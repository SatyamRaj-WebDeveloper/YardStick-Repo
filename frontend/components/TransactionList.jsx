'use client';
import { Button } from "../src/components/ui/button";
import { Card, CardContent } from "../src/components/ui/card";
import { Trash2 } from "lucide-react";
import { deleteTransaction } from "../services/api";

export default function TransactionList({ transactions, onDelete ,onEdit }) {
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
            <div className="flex justify-center items-center mx-2 ">
             <Button
              variant="destructive"
              onClick={() => onDelete(txn._id)}
              size="icon"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
              <Button onClick={() => onEdit(txn)} className='mx-2'>Edit</Button>
            </div>
          
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

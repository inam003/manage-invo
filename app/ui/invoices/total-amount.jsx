import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const TotalAmount = ({ totalAmount }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Amount</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${totalAmount.toFixed(2)}</div>
      </CardContent>
    </Card>
  );
};

export default TotalAmount;

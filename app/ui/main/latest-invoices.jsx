import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import {fetchLatestInvoices} from "@/lib/data";

const LatestInvoices = async () => {
  // const latestInvoices = await fetchLatestInvoices();

  // if (latestInvoices.length === 0) {
  //   return <p>No invoices found or session not available.</p>;
  // }

  const latestInvoices = [
    {
      customerName: "Olivia Martin",
      customerEmail: "olivia.martin@email.com",
      invoiceAmount: 1999.0,
    },
    {
      customerName: "Jackson Lee",
      customerEmail: "jackson.lee@email.com",
      invoiceAmount: 39.0,
    },
    {
      customerName: "Isabella Nguyen",
      customerEmail: "isabella.nguyen@email.com",
      invoiceAmount: 299.0,
    },
    {
      customerName: "William Kim",
      customerEmail: "will@email.com",
      invoiceAmount: 99.0,
    },
    {
      customerName: "Sofia Davis",
      customerEmail: "sofia.davis@email.com",
      invoiceAmount: "",
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Latest Invoices</h1>
        <Link href="/dashboard/invoices">
          <Button className="bg-blue-500 hover:bg-blue-400 text-white">
            View All
          </Button>
        </Link>
      </div>
      <Card>
        <CardContent className="grid px-4 py-2">
          {latestInvoices.map((invoice) => (
            <div
              key={invoice.id}
              className="flex items-center px-2 py-4 rounded-lg hover:bg-slate-100"
            >
              <div className="grid gap-1 mr-[14rem]">
                <p className="text-sm font-medium leading-none">
                  {invoice.customerName}
                </p>
                <p className="text-sm text-muted-foreground">
                  {invoice.customerEmail}
                </p>
              </div>
              <div className="ml-auto font-medium">
                {invoice.invoiceAmount > 0 ? `$${invoice.invoiceAmount}` : `$0`}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default LatestInvoices;

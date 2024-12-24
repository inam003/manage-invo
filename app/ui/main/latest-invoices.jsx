import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LatestInvoices = () => {
  const latestData = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      amount: 1999.0,
      avatafFallback: "OM",
    },
    {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      amount: 39.0,
      avatafFallback: "JL",
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      amount: 299.0,
      avatafFallback: "IN",
    },
    {
      name: "William Kim",
      email: "will@email.com",
      amount: 99.0,
      avatafFallback: "WK",
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      amount: "",
      avatafFallback: "SD",
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
          {latestData.map((data, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-2 py-4 rounded-lg hover:bg-slate-100"
            >
              <Avatar className="size-9">
                <AvatarImage src="/defaultAvatar.avif" alt="Avatar" />
                <AvatarFallback>{data.avatafFallback}</AvatarFallback>
              </Avatar>
              <div className="grid gap-1 mr-[14rem]">
                <p className="text-sm font-medium leading-none">{data.name}</p>
                <p className="text-sm text-muted-foreground">{data.email}</p>
              </div>
              <div className="ml-auto font-medium">
                {data.amount > 0 ? `$${data.amount}` : `$0`}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default LatestInvoices;

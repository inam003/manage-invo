import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, ScrollText, Users } from "lucide-react";

const Cards = ({ title, value, icon }) => {
  const cardsData = [
    {
      title: "Collected",
      value: "$1000",
      icon: <DollarSign className="size-4 text-gray-500" />,
    },
    {
      title: "Pending",
      value: "8",
      icon: <Clock className="size-4 text-gray-500" />,
    },
    {
      title: "Total Invoices",
      value: "10",
      icon: <ScrollText className="size-4 text-gray-500" />,
    },
    {
      title: "Total Customers",
      value: "10",
      icon: <Users className="size-4 text-gray-500" />,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
      {cardsData.map((card, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-2">
            {card.icon}
            <CardTitle className="text-base font-medium">
              {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500">{card.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Cards;

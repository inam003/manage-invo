import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, Eye, MoreHorizontal, Trash } from "lucide-react";
import InvoiceStatus from "./status";
import PaginationButtons from "./pagination";

const InvoicesTable = () => {
  const invoicesData = [
    {
      customerName: "John Doe",
      email: "johndoe@gmail.com",
      amount: 199.0,
      date: "Dec 12, 2024",
      status: "pending",
    },
    {
      customerName: "Olivia Martinohn",
      email: "olivia.martin@email.com",
      amount: 19.0,
      date: "Dec 12, 2024",
      status: "paid",
    },
    {
      customerName: "Jackson Lee",
      email: "jackson.lee@email.com",
      amount: 39.0,
      date: "Dec 12, 2024",
      status: "paid",
    },
    {
      customerName: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      amount: 309.0,
      date: "Dec 12, 2024",
      status: "paid",
    },
    {
      customerName: "William Kim",
      email: "iwill@email.comsabella.nguyen@email.com",
      amount: 100.0,
      date: "Dec 12, 2024",
      status: "pending",
    },
    {
      customerName: "Sofia Davis",
      email: "sofia.davis@email.com",
      amount: 150.0,
      date: "Dec 12, 2024",
      status: "pending",
    },
  ];
  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-medium pl-3">Customer</TableHead>
              <TableHead className="font-medium">Email</TableHead>
              <TableHead className="font-medium">Amount</TableHead>
              <TableHead className="font-medium">Date</TableHead>
              <TableHead className="font-medium">Status</TableHead>
              <TableHead className="font-medium">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoicesData.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium pl-3 py-3">
                  {data.customerName}
                </TableCell>
                <TableCell className="py-3">{data.email}</TableCell>
                <TableCell className="py-3 pl-7">{data.amount}</TableCell>
                <TableCell className="py-3">{data.date}</TableCell>
                <TableCell className="py-3">
                  <InvoiceStatus status={data.status} />
                </TableCell>
                <TableCell className="py-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="size-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem className="cursor-pointer">
                        <div className="flex items-center">
                          <Eye className="size-4 mr-2" />
                          View details
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <div className="flex items-center">
                          <Edit className="size-4 mr-2" />
                          Edit invoice
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="cursor-pointer">
                        <div className="flex items-center hover:text-red-500">
                          <Trash className="size-4 mr-2" />
                          Delete invoice
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <PaginationButtons />
    </div>
  );
};

export default InvoicesTable;

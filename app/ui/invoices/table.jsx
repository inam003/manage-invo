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
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import InvoiceStatus from "./status";
import PaginationButtons from "./pagination";
import Link from "next/link";

const InvoicesTable = ({ invoicesData }) => {
  // const invoicesData = [
  //   {
  //     customerName: "John Doe",
  //     purpose: "Agenecy Website",
  //     email: "johndoe@email.com",
  //     amount: 199.0,
  //     date: "Dec 12, 2024",
  //     status: "pending",
  //   },
  //   {
  //     customerName: "Olivia Martinohn",
  //     purpose: "Landing Page",
  //     email: "olivia.martin@email.com",
  //     amount: 19.0,
  //     date: "Dec 12, 2024",
  //     status: "paid",
  //   },
  //   {
  //     customerName: "Jackson Lee",
  //     purpose: "Corporate Website",
  //     email: "jackson.lee@email.com",
  //     amount: 39.0,
  //     date: "Dec 12, 2024",
  //     status: "paid",
  //   },
  //   {
  //     customerName: "Isabella Nguyen",
  //     purpose: "E-commerce Website",
  //     email: "isabella.nguyen@email.com",
  //     amount: 309.0,
  //     date: "Dec 12, 2024",
  //     status: "paid",
  //   },
  //   {
  //     customerName: "William Kim",
  //     purpose: "Personal Portfolio",
  //     email: "willkim@email.com",
  //     amount: 100.0,
  //     date: "Dec 12, 2024",
  //     status: "pending",
  //   },
  //   {
  //     customerName: "Sofia Davis",
  //     purpose: "Finance Dashboard",
  //     email: "sofia.davis@email.com",
  //     amount: 150.0,
  //     date: "Dec 12, 2024",
  //     status: "pending",
  //   },
  // ];

  let id = 1;
  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-medium pl-3">Customer</TableHead>
              <TableHead className="font-medium">Purpose</TableHead>
              <TableHead className="font-medium">Email</TableHead>
              <TableHead className="font-medium">Amount</TableHead>
              <TableHead className="font-medium">Date</TableHead>
              <TableHead className="font-medium">Status</TableHead>
              {/* <TableHead className="font-medium">Actions</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoicesData.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium pl-3 py-3">
                  {data.customerName}
                </TableCell>
                <TableCell className="py-3">{data.purpose}</TableCell>
                <TableCell className="py-3">{data.email}</TableCell>
                <TableCell className="py-3 pl-7">{`$${data.amount}`}</TableCell>
                <TableCell className="py-3">{data.date}</TableCell>
                <TableCell className="py-3">
                  <InvoiceStatus status={data.status} />
                </TableCell>
                {/* <TableCell className="py-3">
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
                        <Link
                          href={`/dashboard/invoices/${id}/edit`}
                          className="flex items-center"
                        >
                          <Edit className="size-4 mr-2" />
                          Edit invoice
                        </Link>
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
                </TableCell> */}
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

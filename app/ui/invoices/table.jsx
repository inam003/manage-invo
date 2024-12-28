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
import supabase from "@/lib/supabaseClient";
import toast from "react-hot-toast";

const InvoicesTable = ({ invoicesData }) => {
  const deleteInvoice = async (id) => {
    try {
      const response = await supabase.from("invoices").delete().eq("id", id);

      toast.success("Invoice deleted successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

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
              <TableHead className="font-medium">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoicesData.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium pl-3 py-3">
                  {invoice.customerName}
                </TableCell>
                <TableCell className="py-3">{invoice.invoicePurpose}</TableCell>
                <TableCell className="py-3">{invoice.customerEmail}</TableCell>
                <TableCell className="py-3 pl-5">{`$${invoice.invoiceAmount}`}</TableCell>
                <TableCell className="py-3">{invoice.created_at}</TableCell>
                <TableCell className="py-3">
                  <InvoiceStatus status={invoice.invoiceStatus} />
                </TableCell>
                <TableCell className="py-3 pl-6">
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
                          href={`/dashboard/invoices/${invoice.slug}/edit`}
                          className="flex items-center"
                        >
                          <Edit className="size-4 mr-2" />
                          Edit invoice
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="cursor-pointer">
                        <div
                          onClick={() => deleteInvoice(invoice.id)}
                          className="flex items-center hover:text-red-500"
                        >
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

import React, { useState, useMemo } from "react";
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
import { deleteInvoice } from "@/lib/actions";
import TotalInvoices from "./total-invoices";
import TotalAmount from "./total-amount";
import FilterByStatus from "./filter-by-status";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const InvoicesTable = ({ invoicesData }) => {
  const INVOICES_PER_PAGE = 4;
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInvoices = useMemo(() => {
    if (!Array.isArray(invoicesData)) return [];
    if (statusFilter === "all") return invoicesData;
    return invoicesData.filter((invoice) => {
      const matchesStatus =
        statusFilter === "all" ||
        invoice.invoiceStatus.toLowerCase() === statusFilter.toLowerCase();
      const matchesSearch = invoice.customerName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [invoicesData, statusFilter, searchQuery]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredInvoices.length / INVOICES_PER_PAGE)
  );

  const paginatedInvoices = useMemo(() => {
    const startIndex = (currentPage - 1) * INVOICES_PER_PAGE;
    return filteredInvoices.slice(startIndex, startIndex + INVOICES_PER_PAGE);
  }, [filteredInvoices, currentPage]);

  const totalInvoices = Array.isArray(invoicesData) ? invoicesData.length : 0;
  const totalAmount = Array.isArray(invoicesData)
    ? invoicesData.reduce(
        (sum, invoice) => sum + (Number(invoice?.invoiceAmount) || 0),
        0
      )
    : 0;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TotalInvoices totalInvoices={totalInvoices} />
        <TotalAmount totalAmount={totalAmount} />
        <FilterByStatus
          onStatusFilterChange={(status) => {
            setStatusFilter(status);
            setCurrentPage(1);
          }}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Search className="size-5 text-gray-500" />
        <Input
          type="text"
          placeholder="Search by customer name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

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
            {paginatedInvoices.map((invoice) => (
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
      <PaginationButtons
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default InvoicesTable;

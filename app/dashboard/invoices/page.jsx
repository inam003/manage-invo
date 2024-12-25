import React from "react";
import Search from "@/app/ui/invoices/search";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import InvoicesTable from "@/app/ui/invoices/table";

const Invoices = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-medium">Invoices</h1>
      <div className="flex items-center gap-4">
        <Search />
        <CreateInvoice />
      </div>
      <div>
        <InvoicesTable />
      </div>
    </div>
  );
};

export default Invoices;

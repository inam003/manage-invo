"use client";

import React, { useState, useEffect } from "react";
import Search from "@/app/ui/invoices/search";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import InvoicesTable from "@/app/ui/invoices/table";
import { fetchInvoices, getSession } from "@/lib/data";

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [token, setToken] = useState(false);

  useEffect(() => {
    const initializeData = async () => {
      const session = getSession();
      if (session) {
        setToken(true);
        const data = await fetchInvoices();
        setInvoices(data);
      }
    };
    initializeData();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-medium">Invoices</h1>
      <div className="flex items-center gap-4">
        <Search />
        <CreateInvoice />
      </div>
      <div>
        <InvoicesTable invoicesData={invoices} />
      </div>
    </div>
  );
};

export default Invoices;

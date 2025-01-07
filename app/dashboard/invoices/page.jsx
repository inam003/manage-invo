"use client";

import React, { useState, useEffect } from "react";
import Search from "@/app/ui/invoices/search";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import InvoicesTable from "@/app/ui/invoices/table";
import { fetchInvoices, getSession } from "@/lib/data";
import NotFound from "./not-found";

const Invoices = (props) => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const initializeData = async () => {
      const session = await getSession();
      if (session) {
        const data = await fetchInvoices();
        setInvoices(data);
      }
    };
    initializeData();
  }, []);

  if (!invoices) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col gap-6">
      {invoices.length > 0 ? (
        <>
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-3xl font-medium">Invoices</h1>
            <CreateInvoice />
          </div>
          <div>
            <InvoicesTable invoicesData={invoices} />
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Invoices;

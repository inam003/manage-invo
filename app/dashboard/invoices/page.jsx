"use client";

import React, { useState, useEffect } from "react";
import Search from "@/app/ui/invoices/search";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import InvoicesTable from "@/app/ui/invoices/table";
import supabase from "@/lib/supabaseClient";

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [token, setToken] = useState(false);

  useEffect(() => {
    const fetchSession = () => {
      const session = sessionStorage.getItem("token");
      if (session) {
        setToken(true);
        const userDetails = JSON.parse(session);
        fetchInvoices(userDetails.session.user.id);
      }
    };
    fetchSession();
  }, []);

  const fetchInvoices = async () => {
    try {
      const userDetails = JSON.parse(sessionStorage.getItem("token"));
      const { data, error } = await supabase
        .from("invoices")
        .select(
          `
        id,
        user_id,
        customerName,
        customerEmail,
        invoicePurpose,
        invoiceAmount,
        invoiceStatus,
        slug,
        created_at
      `
        )
        .eq("user_id", userDetails.session.user.id)
        .order("created_at", { ascending: false });
      if (error) {
        console.error("Error fetching invoices:", error);
        return;
      }

      setInvoices(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

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

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
        console.log("User details:", userDetails);
        fetchInvoices(userDetails.user.id);
      }
    };
    fetchSession();
  }, []);

  const fetchInvoices = async () => {
    try {
      // Get current user
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return [];

      // Fetch invoices with proper query
      const { data, error } = await supabase.from("invoices").select();
      // .eq("id", user.id);

      if (error) {
        console.error("Error:", error);
        return [];
      }

      console.log("Fetched data:", data); // Debug
      setInvoices(data);
      return data || [];
    } catch (error) {
      console.error("Error:", error);
      return [];
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

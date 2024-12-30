"use client";

import React, { useState, useEffect } from "react";
import { fetchInvoices, getSession } from "@/lib/data";
import CustomersTable from "@/app/ui/customers/customersTable";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [token, setToken] = useState(false);

  useEffect(() => {
    const initializeData = async () => {
      const session = getSession();
      if (session) {
        setToken(true);
        const data = await fetchInvoices();
        setCustomers(data);
        console.log(data);
      }
    };
    initializeData();
  }, []);
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-medium">Customers</h1>
      <div>
        <CustomersTable customers={customers} />
      </div>
    </div>
  );
};

export default Customers;

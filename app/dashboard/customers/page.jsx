"use client";

import React, { useState, useEffect } from "react";
import { fetchInvoices, getSession } from "@/lib/data";
import CustomersTable from "@/app/ui/customers/customersTable";
import NotFound from "./not-found";

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
      }
    };
    initializeData();
  }, []);
  return (
    <div className="flex flex-col gap-6">
      {customers.length > 0 ? (
        <>
          <h1 className="text-3xl font-medium">Customers</h1>
          <div>
            <CustomersTable customers={customers} />
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Customers;

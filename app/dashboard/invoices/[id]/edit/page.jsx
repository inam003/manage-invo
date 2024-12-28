"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import supabase from "@/lib/supabaseClient";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const EditInvoice = () => {
  const { id } = useParams();
  const router = useRouter();
  const [customerName, setCustomerName] = useState("");
  const [invoicePurpose, setInvoicePurpose] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [invoiceAmount, setInvoiceAmount] = useState("");
  const [invoiceStatus, setInvoiceStatus] = useState("");

  const handleStatusChange = (value) => {
    setInvoiceStatus(value);
  };

  useEffect(() => {
    fetchInvoiceBySlug();
  }, []);

  const fetchInvoiceBySlug = async () => {
    try {
      const { data, error } = await supabase
        .from("invoices")
        .select(
          `
        id,
        customerName,
        customerEmail,
        invoicePurpose,
        invoiceAmount,
        invoiceStatus,
        slug,
        created_at
      `
        )
        .eq("slug", id);

      if (error) {
        console.error("Error fetching invoices:", error);
        return;
      }

      if (data && data[0]) {
        setCustomerName(data[0].customerName);
        setCustomerEmail(data[0].customerEmail);
        setInvoicePurpose(data[0].invoicePurpose);
        setInvoiceAmount(data[0].invoiceAmount);
        setInvoiceStatus(data[0].invoiceStatus);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updateInvoice = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("invoices")
        .update({
          customerName: customerName,
          invoicePurpose: invoicePurpose,
          customerEmail: customerEmail,
          invoiceAmount: invoiceAmount,
          invoiceStatus: invoiceStatus,
        })
        .eq("slug", id)
        .select();

      if (error) {
        console.error("Error updating invoice:", error);
        return;
      }

      toast.success("Invoice updated successfully");
      router.push("/dashboard/invoices");
    } catch (error) {
      console.log("Error updating invoice:", error);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-medium">Edit Invoice</h1>
      <div className="w-full mx-auto space-y-6">
        <Card className="bg-gray-50">
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <Label>Customer Name</Label>
              <Input
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                type="text"
                placeholder="Enter customer name"
              />
            </div>

            <div className="space-y-2">
              <Label>Purpose</Label>
              <Input
                value={invoicePurpose}
                onChange={(e) => setInvoicePurpose(e.target.value)}
                type="text"
                placeholder="Enter invoice purpose"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Customer Email</Label>
              <Input
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="Enter customer email"
              />
            </div>

            <div className="space-y-2">
              <Label>Choose an amount</Label>
              <div className="relative">
                <Input
                  value={invoiceAmount}
                  onChange={(e) => setInvoiceAmount(e.target.value)}
                  type="number"
                  placeholder="Enter USD amount"
                  className="pl-8"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Set the invoice status</Label>
              <RadioGroup
                value={invoiceStatus}
                onValueChange={handleStatusChange}
                onChange={(e) => setInvoiceStatus(e.target.value)}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pending" id="pending" />
                  <Label htmlFor="pending" className="cursor-pointer">
                    Pending
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paid" id="paid" />
                  <Label htmlFor="paid" className="cursor-pointer">
                    Paid
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4 mt-6">
          <Link href="/dashboard/invoices">
            <Button variant="outline" className="bg-white hover:bg-gray-50">
              Cancel
            </Button>
          </Link>
          <Button
            onClick={updateInvoice}
            className="bg-blue-600 transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Update Invoice
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditInvoice;

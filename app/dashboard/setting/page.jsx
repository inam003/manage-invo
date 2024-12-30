"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { getSession } from "@/lib/data";
import supabase from "@/lib/supabaseClient";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Setting = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    getAccountInfo();
  }, []);

  const getAccountInfo = async () => {
    try {
      const userDetails = getSession();
      if (!userDetails) return [];

      const { data, error } = await supabase
        .from("users")
        .select(
          `
        id,
        email,
        password
        `
        )
        .eq("id", userDetails.session.user.id);

      if (error) throw error;
      console.log(data);
      setEmail(data[0].email);
      setPassword(data[0].password);
    } catch (error) {
      console.error("Error fetching account-info:", error);
    }
  };

  const updateAccountInfo = async (e) => {
    e.preventDefault();

    try {
      const userDetails = getSession();
      if (!userDetails) return [];

      const { data, error } = await supabase
        .from("users")
        .update({
          email: email,
          password: password,
        })
        .eq("id", userDetails.session.user.id)
        .select();

      if (error) {
        console.error("Error updating account-info:", error);
        return;
      }

      toast.success("Account updated successfully");
      router.push("/dashboard");
    } catch (error) {
      console.log("Error updating invoice:", error);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-medium">Settings</h1>
      <div className="space-y-2 px-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2 px-2">
        <Label htmlFor="password">New Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-end gap-4">
        <Link href="/dashboard">
          <Button variant="outline" className="bg-white hover:bg-gray-50">
            Cancel
          </Button>
        </Link>
        <Button
          onClick={updateAccountInfo}
          className="bg-blue-600 transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Update Setting
        </Button>
      </div>
    </div>
  );
};

export default Setting;

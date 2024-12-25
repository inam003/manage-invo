"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import supabase from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const description =
  "A sign up form with Email and Password inside a card. There's an option to sign up with Google and a link to login if you already have an account";

export default function SignUpForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const { data } = await supabase.auth.signUp({
        email,
        password,
      });

      const { error } = await supabase
        .from("users")
        .insert({ email: email, password: password });
      if (error) throw error;

      toast.success("Account created successfully");
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="mx-auto my-36 max-w-[23rem] sm:max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className="w-full"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              placeholder="******"
              required
            />
          </div>
          <Button
            onClick={handleSignUp}
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-400 text-white"
          >
            Create an account
          </Button>
          <Button variant="outline" className="w-full">
            Sign up with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="underline hover:text-blue-500 transition-colors duration-150 ease-in-out"
          >
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

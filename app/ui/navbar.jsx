"use client";

import React from "react";
import Link from "next/link";
import {
  Home,
  LogOut,
  Menu,
  Settings,
  User,
  Users,
  ScrollText,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import supabase from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const menus = [
    {
      title: "Dashboard",
      icon: <Home className="size-4" />,
      path: "/dashboard",
    },
    {
      title: "Invoices",
      icon: <ScrollText className="size-4" />,
      path: "/dashboard/invoices",
    },
    {
      title: "Customers",
      icon: <Users className="size-4" />,
      path: "/dashboard/customers",
    },
  ];

  useEffect(() => {
    fetchUserEmail();
  }, []);

  const fetchUserEmail = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from("users")
        .select("email")
        .eq("id", user.id);
      if (error) throw error;
      console.log(data);
      if (data) {
        setEmail(data[0].email);
      }
    } catch (error) {
      console.error("Error fetching user email:", error.message);
    }
  };

  const handleSignOut = async () => {
    const { data, error } = await supabase.auth.signOut();
    console.log(data);
    if (error) console.error("Sign out error", error.message);
    sessionStorage.removeItem("token");
    toast.success("Logged out successfully");
    router.push("/login");
  };

  return (
    <header className="bg-white fixed w-full top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
      <nav className="hidden md:flex">
        <Link href="/dashboard">
          <ScrollText className="size-10 text-blue-600" />
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[250px] pl-2 pt-2" side="left">
          <Link href="/dashboard">
            <ScrollText className="size-8 mx-4 text-blue-600" />
          </Link>
          <nav className="grid items-start px-2 py-4 text-sm font-medium lg:px-4">
            {menus.map((item, id) => (
              <div key={id}>
                <Link
                  href={item.path}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                >
                  <span className="size-4 ">{item.icon}</span>
                  {item.title}
                </Link>
              </div>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Avatar className="size-10">
                <AvatarImage src="/defaultAvatar.avif" />
              </Avatar>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuLabel>{email}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="rounded-lg cursor-pointer">
              <Link className="flex items-center" href={"/dashboard/profile"}>
                <User className="mr-2 size-4" />
                My Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-lg cursor-pointer">
              <Link className="flex items-center" href={"/dashboard/settings"}>
                <Settings className="mr-2 size-4" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleSignOut}
              className="rounded-lg cursor-pointer"
            >
              <LogOut className="mr-2 size-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

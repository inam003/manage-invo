"use client";

import React from "react";
import { Home, ScrollText, Users } from "lucide-react";
import Link from "next/link";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import supabase from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { LogOut } from "lucide-react";

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
  {
    title: "Setting",
    icon: <Settings className="size-4" />,
    path: "/dashboard/setting",
  },
];

const Sidebar = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    const { data, error } = await supabase.auth.signOut();
    if (error) console.error("Sign out error", error.message);

    sessionStorage.removeItem("token");
    toast.success("Logged out successfully");
    router.push("/login");
  };

  return (
    <div className="hidden md:inline fixed md:w-56 top-16 left-0 min-h-[91.1vh] max-h-full overflow-hidden bg-white border-r border-slate-200 py-4">
      <nav className="items-start px-2 lg:px-3 text-sm font-medium h-full">
        {menus.map((item, id) => (
          <div key={id}>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 my-1 text-muted-foreground transition-all hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
              href={item.path}
            >
              <span className="size-4">{item.icon}</span>
              {item.title}
            </Link>
          </div>
        ))}
      </nav>
      <Button
        onClick={handleSignOut}
        className="fixed bottom-4 left-4 px-[3.5rem] bg-blue-500 transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Logout
        <LogOut className="size-4 ml-2" />
      </Button>
    </div>
  );
};

export default Sidebar;

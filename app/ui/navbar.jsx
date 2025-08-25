import React from "react";
import Link from "next/link";
import { Home, Menu, Users, ScrollText } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export default function Navbar() {
  const menus = [
    {
      title: "Dashboard",
      icon: <Home className="size-4" />,
      path: "/dashboard/invoices",
    },
    {
      title: "Customers",
      icon: <Users className="size-4" />,
      path: "/dashboard/customers",
    },
  ];

  return (
    <header className="bg-white fixed w-full top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
      <nav className="hidden md:flex">
        <Link href="/dashboard/invoices">
          <h3 className="text-2xl font-bold text-blue-600">ManageInvoice</h3>
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
          <Link href="/dashboard/invoices">
            <h3 className="text-2xl font-bold text-blue-600">ManageInvoice</h3>
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
    </header>
  );
}

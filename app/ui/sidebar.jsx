import React from "react";
import { Home, ScrollText, Users } from "lucide-react";
import Link from "next/link";

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

const Sidebar = () => {
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
    </div>
  );
};

export default Sidebar;

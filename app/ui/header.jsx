import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="py-4 px-6 absolute top-0 left-0 right-0 z-40 w-full">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-500">
          InvoicePro
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost" className="text-white hover:text-black">
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-blue-500 hover:bg-blue-400 text-white">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

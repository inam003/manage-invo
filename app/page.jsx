import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Header from "./ui/header";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <section className="relative px-6 bg-black text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/dashboard.webp"
            alt="Invoice Dashboard Interface"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Simplify Your Invoice Management
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Streamline your invoicing process, get paid faster, and focus on
              growing your business.
            </p>
            <div className="mt-10">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-400 text-white"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

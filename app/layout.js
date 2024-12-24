import "./globals.css";
import { inter } from "./fonts/fonts";

export const metadata = {
  title: "Invoice Manager",
  description: "A simple invoice manager to manage your invoices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

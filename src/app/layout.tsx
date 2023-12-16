import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/app/components/Nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ticket App",
  description: "Project By Aditya Zende",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen ">
          <Nav />
          <div className="flex-grow overflow-y-auto bg-gray-500 text-default-text">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

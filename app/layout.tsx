import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: {
    default: "25th Annual Collegiate Wushu Tournament",
    template: "%s | 25th Annual Collegiate Wushu Tournament",
  },
  description: "Collegiates scoreboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-nova">
        <link rel="stylesheet" href="https://use.typekit.net/zao2vdq.css" />
        <header className="bg-lighter-blue overflow-hidden text-center py-5 border-solid border-b border-white">
          25th Annual Wushu Collegiate Tournament
        </header>
        <Navbar />
        {children}
        <footer className="bg-darker-blue overflow-hidden">Footer</footer>
      </body>
    </html>
  );
}

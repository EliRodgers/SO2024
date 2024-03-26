import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";
import Navbar from "./components/navbar";
import Button from "./components/button";

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
      <body className="font-nova overscroll-none animate-fade">
        <link rel="stylesheet" href="https://use.typekit.net/zao2vdq.css" />
        <header className="grid grid-cols-7 bg-darker-blue overflow-hidden border-solid border-b border-white text-3xl">
          <div className="border-r flex col-span-1 py-3 items-center justify-center transition ease-in-out delay:150 duration:300 hover:bg-dark-blue">
            <Button />
          </div>
          <div className="flex justify-center items-center col-span-6 p-5">
            <div className="tracking-wide text-4xl font-bold font-grotesksc">
              25th Annual Collegiate Wushu Tournament
            </div>
          </div>
        </header>
        <Navbar />
        {children}
        <footer className="bg-darker-blue overflow-hidden">Footer</footer>
      </body>
    </html>
  );
}

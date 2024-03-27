import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";
import Navbar from "./components/navbar";
import Button from "./components/button";
import Image from "next/image";

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
      <body className="!scroll-smooth font-grotesk overscroll-none animate-fade">
        <link rel="stylesheet" href="https://use.typekit.net/zao2vdq.css" />
        <div className="sticky top-0 backdrop-blur">
          <header className="grid grid-cols-7 bg-black bg-opacity-45 overflow-hidden border-solid border-b border-slate-500 text-3xl">
            <div className="flex col-span-1 py-5 items-center justify-center transition ease-in-out delay:150 duration:300 hover:scale-105 hover:animate-pulse">
              <Button />
            </div>
            <div className="flex justify-center items-center col-span-6 p-5">
              <div className="tracking-wide text-5xl font-bold font-grotesksc">
                25th Annual Collegiate Wushu Tournament
                <div className="text-gold tracking-wide text-xl italic font-grotesksc">
                  April 6, 2024 ⋆ Los Angeles, CA
                </div>
              </div>
            </div>
          </header>
          <Navbar />
        </div>
        {children}
        <footer className="py-5 border-t border-slate-500 bg-black bg-opacity-60 overflow-hidden">
          <div className="inline-grid grid-flow-col gap-5 px-5">
            <div className="fill-current text-blue">
              <Link href="https://www.instagram.com/uclawushu/">
                <Image
                  src="/instagram.svg"
                  width={20}
                  height={20}
                  alt="instagram"
                  className="hover:opacity-50"
                />
              </Link>
            </div>
            <Link href="https://github.com/rachjn/collegiates-scoreboard">
              <Image
                src="/github.svg"
                width={20}
                height={20}
                alt="github"
                className="hover:opacity-50"
              />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}

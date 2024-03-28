import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";
import Navbar from "./components/navbar";
import Button from "./components/button";
import Image from "next/image";
// import Header from "./components/header";

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
      <body className="font-grotesk overscroll-none animate-fade">
        <link rel="stylesheet" href="https://use.typekit.net/zao2vdq.css" />
        <div className="sticky top-0 backdrop-blur">
          {/* <header className="grid grid-cols-3 lg:grid lg:grid-cols-7 bg-black bg-opacity-45 overflow-hidden border-solid border-b border-slate-500"> */}
          {/* <div className="flex lg:shrink-0 col-span-1 lg:py-5 items-center justify-center transition ease-in-out delay:150 duration:300 hover:scale-105 hover:animate-pulse"> */}
          {/* <div className="transform scale-75 lg:scale-100">
                <Button />
              </div> */}
          {/* </div> */}
          {/* <div className="flex col-span-2 justify-center items-center lg:col-span-6 p-2 lg:p-5">
              <div className="text-xl tracking-wide lg:text-5xl font-bold font-grotesksc">
                25th Annual Collegiate Wushu Tournament
                <div className="text-xs text-gold tracking-wide lg:text-xl italic font-grotesksc">
                  April 6, 2024 ⋆ Los Angeles, CA
                </div>
              </div>
            </div> */}
          {/* </header> */}
          {/* <Header /> */}
          <Navbar />
        </div>
        {children}
        <footer className="py-5 border-t border-slate-500 bg-black bg-opacity-65 overflow-hidden">
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

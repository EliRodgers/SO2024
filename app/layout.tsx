import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";
import Navbar from "./navbar";
import Button from "./button";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL("https://so-2024.vercel.app"),
  title: {
    default: "2024 Stanford Spring Open Tournament",
    template: "%s | 2024 Stanford Spring Open Tournament",
  },
  description: "Collegiates scoreboard",
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/public/favicon.ico" />
      <body className="font-grotesk overscroll-none animate-fade">
        <link rel="stylesheet" href="https://use.typekit.net/zao2vdq.css" />
        <div className="sticky top-0 backdrop-blur">
          <Navbar />
        </div>
        {children}
        <footer className="py-5 border-t border-gray-900 bg-black bg-opacity-65 overflow-hidden">
          <div className="inline-grid grid-flow-col gap-5 px-5">
            <div className="fill-current text-blue">
              <Link href="https://www.instagram.com/stanfordtkd/">
                <Image
                  src="/instagram.svg"
                  width={20}
                  height={20}
                  alt="instagram"
                  className="hover:opacity-50"
                />
              </Link>
            </div>
            <Link href="https://github.com/EliRodgers/SO2024">
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

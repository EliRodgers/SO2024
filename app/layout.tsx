import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "25th Annual Collegiate Wushu Tournament",
  description: "Collegiates scoreboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-sky-400 overflow-hidden">Header</header>
        {children}
        <footer className="bg-sky-800 overflow-hidden">Footer</footer>
      </body>
    </html>
  );
}

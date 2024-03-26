import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "25th Annual Collegiate Wushu Tournament",
    template: "%s | 25th Annual Collegiate Wushu Tournament",
  },
  description: "Collegiates scoreboard",
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Team Standings", href: "/team" },
  { name: "Event Standings", href: "/event" },
  { name: "Individual Scores", href: "/individual" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-sky-400 overflow-hidden">Header</header>
        {navLinks.map((link) => {
          return (
            <Link href={link.href} key={link.name}>
              {link.name}
            </Link>
          );
        })}
        {children}
        <footer className="bg-sky-800 overflow-hidden">Footer</footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";

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
      <body className="font-nova">
        <link rel="stylesheet" href="https://use.typekit.net/zao2vdq.css" />
        <header className="bg-lighter-blue overflow-hidden">Header</header>
        <div className="grid grid-cols-4 justify-between">
          {navLinks.map((link) => {
            return (
              // <div className="flex items-center justify-center">
              <Link
                className="font-novawide text-center"
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        {children}
        <footer className="bg-darker-blue overflow-hidden">Footer</footer>
      </body>
    </html>
  );
}

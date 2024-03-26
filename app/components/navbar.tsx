"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Team Standings", href: "/team" },
  { name: "Event Standings", href: "/event" },
  { name: "Individual Scores", href: "/individual" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="grid grid-cols-4 justify-between font-novawide text-center divide-x">
      {navLinks.map((link) => {
        const isActive = pathname && pathname.startsWith(link.href);
        return (
          // <div className="flex items-center justify-center">
          <Link
            href={link.href}
            key={link.name}
            className={
              isActive
                ? "font-bold py-3 border-b bg-dark-blue"
                : "transition ease-in-out delay-100 text-slate-500 py-3 border-b hover:bg-dark-blue hover:text-white"
            }
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;

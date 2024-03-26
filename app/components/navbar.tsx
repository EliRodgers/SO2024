"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import link from "next/link";

const navLinks = [
  { name: "Team Standings", href: "/team" },
  { name: "Event Standings", href: "/event" },
  { name: "Individual Scores", href: "/individual" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="grid grid-cols-3 font-grotesk tracking text-center uppercase">
      {navLinks.map((link) => {
        const isActive = pathname && pathname.startsWith(link.href);
        // const isHome = pathname == "/";
        return (
          <Link
            href={link.href}
            key={link.name}
            className={
              isActive
                ? "font-bold py-3 border-b bg-black bg-opacity-65 px-3 border-slate-500 border-r border-l border-b-gold"
                : // : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-70"
                  "bg-black bg-opacity-35 transition-all ease-in-out delay-100 border-slate-500 hover:border-l hover:border-r hover:border-b-gold hover:font-bold text-slate-500 py-3 border-b hover:bg-blend-luminosity hover:bg-black hover:bg-opacity-65 hover:text-white px-3"
            }
          >
            {/* <div className={isHome ? "font-bold" : "bg-transparent"}> */}
            {link.name}
            {/* </div> */}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;

"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import link from "next/link";
import Button from "./button";

const navLinks = [
  { name: "Teams", href: "/teams" },
  { name: "Events", href: "/events" },
  { name: "Individuals", href: "/individuals" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-row">
      <div className="bg-black bg-opacity-65 p-2 border-b border-slate-500">
        <Button />
      </div>
      <div className="flex-auto text-sm lg:text-lg grid grid-cols-3 font-grotesk tracking text-center uppercase">
        {navLinks.map((link) => {
          const isActive = pathname && pathname.startsWith(link.href);
          // const isHome = pathname == "/";
          return (
            <>
              <Link
                href={link.href}
                key={link.name}
                className={
                  isActive
                    ? "font-bold py-4 border-b bg-black bg-opacity-85 border-slate-500 border-r border-l border-b-gold"
                    : "bg-black py-4 bg-opacity-65 transition-all ease-in-out duration:300 delay-100 border-slate-500 hover:border-l hover:border-r hover:border-b-gold hover:font-bold text-slate-500 border-b hover:bg-black hover:bg-opacity-85 hover:text-white"
                }
              >
                {link.name}
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;

"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./button";

//"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const currentScrollPos = window.scrollY;
        setIsScrolled(currentScrollPos === 0);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
    };
  });

  //   return (
  //     <header
  //       className={`sticky top-0 left-0 w-full z-50 transition-height ease-in-out duration-200 ${
  //         isScrolled
  //           ? "bg-black bg-opacity-65 shadow-md h-16"
  //           : "bg-black bg-opacity-65 h-10 "
  //       }`}
  //     >
  //       <nav className="flex items-center justify-between py-4 px-8">
  //         <div>
  //           <a href="/" className="text-lg font-bold text-gray-800">
  //             My Website
  //           </a>
  //         </div>
  //         <div className="hidden md:block">
  //           {/* Add your navigation links here */}
  //           <a href="/" className="text-gray-600 hover:text-gray-800 mx-4">
  //             Home
  //           </a>
  //           <a href="/about" className="text-gray-600 hover:text-gray-800 mx-4">
  //             About
  //           </a>
  //           <a href="/contact" className="text-gray-600 hover:text-gray-800 mx-4">
  //             Contact
  //           </a>
  //         </div>
  //       </nav>
  //     </header>
  //   );
  // };

  // export default Navbar;

  const navLinks = [
    { name: "Teams", href: "/teams" },
    { name: "Events", href: "/events" },
    { name: "Individuals", href: "/individuals" },
  ];

  // const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      {/* <div
        className={`flex flex-row ${
          isScrolled
            ? "transition ease-in-out block"
            : "transition ease-in-out hidden "
        }`}
      > */}
      <div className="flex flex-row">
        <div className="bg-gray-900 bg-opacity-65 p-2 border-b border-slate-500">
          <Button />
        </div>
        <div className="flex-auto text-sm lg:text-lg lg:tracking-widest grid grid-flow-col font-grotesk tracking text-center uppercase">
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
                      ? "font-bold py-4 lg:py-6 border-b bg-gray-900 bg-opacity-65 border-gray-800 border-opacity-65 border-b-gold"
                      : "bg-gray-900 py-4 lg:py-6 bg-opacity-65 transition-all ease-in-out duration:300 delay-100 border-slate-500 hover:border-b-light-gold hover:font-bold text-slate-500 border-b hover:text-white"
                  }
                >
                  {link.name}
                </Link>
              </>
            );
          })}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Navbar;

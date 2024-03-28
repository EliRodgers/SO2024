// CAN TRY AGAIN LATER - collapsible header upon scroll

import Button from "./button";

//"use client";
// import React, { useState, useEffect } from "react";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(true);
//   const [prevScrollPos, setPrevScrollPos] = useState(0);

//   useEffect(() => {
//     let animationFrameId: number;

//     const handleScroll = () => {
//       cancelAnimationFrame(animationFrameId);
//       animationFrameId = requestAnimationFrame(() => {
//         const currentScrollPos = window.scrollY;
//         setIsScrolled(
//           prevScrollPos > currentScrollPos || currentScrollPos === 0
//         );
//         setPrevScrollPos(currentScrollPos);
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [prevScrollPos]);

//   return (
//     <header
//       className={`sticky top-0 left-0 w-full z-50 transition duration-300 ${
//         isScrolled ? "bg-white shadow-md h-16" : "h-20 "
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

// export default Header;

const Header = () => {
  return (
    <header className="overflow-hidden">
      {/* <div className="flex lg:shrink-0 col-span-1 lg:py-5 items-center justify-center transition ease-in-out delay:150 duration:300 hover:scale-105 hover:animate-pulse">
        <div className="transform scale-75 lg:scale-100">
          <Button />
        </div>
      </div> */}
      {/* <div className="justify-center items-center lg:col-span-6 p-2 lg:p-5"> */}
      <div className="text-center text-4xl tracking-wide lg:text-5xl font-bold font-grotesksc">
        25th Annual Collegiate Wushu Tournament
        <div className="my-2 text-lg text-gold tracking-wide lg:text-xl font-bold italic font-grotesksc">
          April 6, 2024 ⋆ Los Angeles, CA
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};

export default Header;

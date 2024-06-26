// "use client";

// const SearchBar = () => {
//   return (
//     <form className="max-w-md mx-auto">
//       <label
//         //   for="default-search"
//         className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//       >
//         Search
//       </label>
//       <div className="relative">
//         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//           <svg
//             className="w-4 h-4 text-gray-500 dark:text-gray-400"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 20 20"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//             />
//           </svg>
//         </div>
//         <input
//           type="search"
//           id="default-search"
//           className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           placeholder="Search Mockups, Logos..."
//           required
//         />
//         <button
//           type="submit"
//           className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Search
//         </button>
//       </div>
//     </form>
//   );
// };

// export default SearchBar;

"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams() as any;
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="font-normal bg-gray-900 bg-opacity-65 peer block w-full rounded-md border text-white border-slate-500 py-[9px] pl-10 text-sm outline-2 placeholder:text-slate-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams?.get("query")?.toString()}
      />
    </div>
  );
}

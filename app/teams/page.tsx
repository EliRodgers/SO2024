import { Metadata } from "next";
import Link from "next/link";
import { teamsExample } from "../api/data";
import Table from "../components/table";
import NotFound from "../components/not-found";
import { Suspense } from "react";
import SearchBar from "../components/searchbar";

export const metadata: Metadata = {
  title: "Team Standings",
};

export default function Team({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="lg:text-lg animate-fade container lg:py-2 px-7 my-3 lg:my-10 overflow-hidden">
      <div className="font-grotesk my-5 lg:mt-0">
        <SearchBar placeholder="Search competitors..." />
      </div>
      <Suspense key={query + currentPage} fallback={<NotFound />}>
        {/* <Table query={query} currentPage={currentPage} /> */}
      </Suspense>
      {teamsExample.map((team) => (
        <>
          <div className="lg:mb-2 lg:text-5xl font-grotesksc text-3xl bg-gradient-to-r from-light-gold via-orange-200 to-int-gold bg-clip-text text-transparent font-bold">
            {team.name}
          </div>
          <Table data={team.competitors} selectcolumns={undefined} />
        </>
      ))}
    </div>
  );
}

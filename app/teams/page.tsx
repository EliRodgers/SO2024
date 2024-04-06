import { Metadata } from "next";
import Link from "next/link";
import { teamsExample } from "../api/data";
import Table from "../components/table";
import NotFound from "../components/not-found";
import { Suspense } from "react";
import SearchBar from "../components/searchbar";
import { getTeams } from "../api/sheets";

export const metadata: Metadata = {
  title: "Team Standings",
};

export const revalidate = 180; //revalidates cache every 10 seconds

export default async function Team({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const teams = await getTeams();
  // const filteredTeams = new Map<string, string[]>();
  const filteredTeams = teams.filter((team: any) =>
    JSON.stringify(team).toLowerCase().includes(query.toLowerCase())
  );
  // console.log(teams[0].members);
  const mycolumns = ["name"];

  return (
    <div className="lg:text-lg animate-fade container lg:py-2 px-7 my-3 lg:my-10 overflow-hidden">
      <div className="font-grotesk my-5 lg:mt-0">
        <SearchBar placeholder="Search teams..." />
      </div>
      {/* <Suspense key={query + currentPage} fallback={<NotFound />}>
      </Suspense> */}
      {filteredTeams.map((team: any) => {
        return (
          <>
            <div className="lg:mb-2 lg:text-5xl font-grotesksc text-3xl bg-gradient-to-r from-light-gold via-orange-200 to-int-gold bg-clip-text text-transparent font-bold">
              {team.name}
            </div>
            <Table data={team.members} selectcolumns={mycolumns} />
          </>
        );
      })}
    </div>
  );
}

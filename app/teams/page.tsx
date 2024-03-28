import { Metadata } from "next";
import Link from "next/link";
import { teams } from "../api/data";
import Table from "../components/table";

export const metadata: Metadata = {
  title: "Team Standings",
};

export default function Team() {
  return (
    <div className="lg:text-lg animate-fade container lg:py-2 px-7 my-3 lg:my-10 overflow-hidden">
      {teams.map((team) => (
        <>
          <div className="font-grotesksc text-3xl bg-gradient-to-r from-light-gold via-orange-200 to-int-gold bg-clip-text text-transparent font-bold">
            {team.name}
          </div>
          <Table data={team.competitors} selectcolumns={undefined} />
        </>
      ))}
    </div>
  );
}

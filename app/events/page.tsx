import { Metadata } from "next";
import Table from "../components/table";
import { Suspense } from "react";
import NotFound from "../components/not-found";
import SearchBar from "../components/searchbar";
import { eventsExample } from "../api/data";
import { getRingSchedules } from "../api/sheets";
import { getAllEventCompetitors } from "../api/rings";
import { eventMap, getEventName } from "../api/utils";

export const metadata: Metadata = {
  title: "Event Standings",
};

// export default function Event({
//   searchParams,
// }: {
//   searchParams?: {
//     query?: string;
//     page?: string;
//   };
// }) {
export default async function Event ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}){
  const rings = await getRingSchedules();
  const eventsWithCompetitors = await getAllEventCompetitors(rings);
  const mycolumns = ["name", "place", "final score"];
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  // console.log(events);
  return (
    <div className="lg:text-lg animate-fade container lg:py-2 px-7 my-3 lg:my-10 overflow-hidden">
      <div className="font-grotesk my-5 lg:mt-0">
        <SearchBar placeholder="Search competitors..." />
      </div>
      <Suspense key={query + currentPage} fallback={<NotFound />}></Suspense>
      {rings.map((events : string[], index : number) => (
        <>
        <div className="font-grotesksc text-5xl bg-gradient-to-r from-light-gold via-orange-200 to-int-gold bg-clip-text text-transparent font-bold h-auto">
          {index > 1 ? "Ring 3" : index > 0 ? "Ring 2" : "Ring 1"}
        </div>
        {events.map((event : string) => (
          <>
            <div className="lg:mb-2 lg:text-5xl font-grotesksc text-3xl bg-gradient-to-r from-light-gold via-orange-200 to-int-gold bg-clip-text text-transparent font-bold">
              {getEventName(event)}
            </div>
            <Table
              data={event}
              selectcolumns={mycolumns}
              query={query}
              currentPage={currentPage}
            />
          </>
        ))}
        </>
      ))}
    </div>
  );
}

{/* <div className="font-grotesksc text-3xl bg-gradient-to-r from-light-gold via-orange-200 to-int-gold bg-clip-text text-transparent font-bold h-auto">
              {getEventName(event)}
            </div>
            <div>
              {//@ts-ignore
              eventsWithCompetitors?.get(event).map((competitor : any) => (
                <div>
                  {competitor.name}
                </div>
              ))}
            </div> */}
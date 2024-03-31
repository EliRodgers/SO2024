import { Metadata } from "next";
import Table from "../components/table";
import { competitors, events } from "../api/data";
import { Suspense } from "react";
import NotFound from "../components/not-found";
import SearchBar from "../components/searchbar";

export const metadata: Metadata = {
  title: "Event Standings",
};

export default function Event({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
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
      {events.map((event) => (
        <>
          {/* <div className="font-grotesksc text-3xl font-bold text-gold mix-blend-screen"> */}
          <div className="lg:mb-2 lg:text-5xl font-grotesksc text-3xl bg-gradient-to-r from-light-gold via-orange-200 to-int-gold bg-clip-text text-transparent font-bold">
            {event.name}
          </div>
          <Table
            data={event.competitors}
            selectcolumns={mycolumns}
            query={query}
            currentPage={currentPage}
          />
        </>
      ))}
    </div>
  );
}

// export default Event;

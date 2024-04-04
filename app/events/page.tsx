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

export default async function Event({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const rings = await getRingSchedules();
  const eventsWithCompetitors = await getAllEventCompetitors(rings);
  // console.log(eventsWithCompetitors);

  // const eventCompetitors = eventsWithCompetitors?.get(event);
  const mycolumns = ["name", "place", "final score"];
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  // console.log(eventsWithCompetitors);
  const filteredEventsWithCompetitors = new Map<string, string[]>();
  const test = rings.map((events: string[], index: number) =>
    events.map((event: string) => {
      const filteredEventCompetitors = eventsWithCompetitors
        ?.get(event)
        ?.filter((comp) => {
          return JSON.stringify(comp)
            .toLowerCase()
            .includes(query.toLowerCase());
        });
      // console.log(filteredEventCompetitors);

      filteredEventsWithCompetitors.set(
        event,
        filteredEventCompetitors as string[]
      );
    })
  );

  console.log(eventsWithCompetitors);
  // console.log(eventsWithCompetitors);

  // test.forEach((event: any) => {
  //   console.log(event);
  // });

  // Function to check if an array is empty
  const isEmptyArray = (arr: any[]) => {
    if (arr === undefined) return true;
    else return arr.length === 0;
  };

  // Remove empty arrays from the nested arrays
  const filteredData = test.map((inner1: any) =>
    inner1.filter((inner2: any) => {
      return !isEmptyArray(inner2);
    })
  );
  // const tableDisplay = filteredData.map((inner1: any) =>
  //   inner1.map((inner2: any) =>
  //     inner2.map((objectArray: any) => {
  //       return objectArray;
  //     })
  //   )
  // );

  return (
    <div className="lg:text-lg animate-fade container lg:py-2 px-7 my-3 lg:my-10 overflow-hidden">
      <div className="font-grotesk my-5 lg:mt-0">
        <SearchBar placeholder="Search competitors..." />
      </div>
      <Suspense key={query + currentPage} fallback={<NotFound />}></Suspense>
      {rings.map((events: string[], index: number) => (
        <>
          <div className="font-grotesksc text-5xl bg-gradient-to-r from-light-gold via-orange-200 to-int-gold bg-clip-text text-transparent font-bold h-auto">
            {
              index > 1
                ? "Ring 3"
                : index > 0
                ? "Ring 2"
                : "Ring 1" /* TODO: Fix this shit man(readability) */
            }
          </div>
          {events.map((event: string) => {
            if (!isEmptyArray(filteredEventsWithCompetitors.get(event))) {
              return (
                <>
                  {/* const result =
              {eventsWithCompetitors
                ?.get(event)
                .filter((comp) => comp.includes(query))} */}
                  <div className="lg:mb-2 lg:text-5xl font-grotesksc text-3xl bg-gradient-to-r from-light-gold via-orange-200 to-int-gold bg-clip-text text-transparent font-bold">
                    {getEventName(event)}
                  </div>
                  <Table
                    // data={eventsWithCompetitors?.get(event)?.filter((comp) => {
                    //   return JSON.stringify(comp).includes(query);
                    // })}
                    data={filteredEventsWithCompetitors?.get(event)}
                    selectcolumns={mycolumns}
                  />
                </>
              );
            } else {
              <></>;
            }
          })}
        </>
      ))}
    </div>
  );
}

{
  /* <div className="font-grotesksc text-3xl bg-gradient-to-r from-light-gold via-orange-200 to-int-gold bg-clip-text text-transparent font-bold h-auto">
              {getEventName(event)}
            </div>
            <div>
              {//@ts-ignore
              eventsWithCompetitors?.get(event).map((competitor : any) => (
                <div>
                  {competitor.name}
                </div>
              ))}
            </div> */
}

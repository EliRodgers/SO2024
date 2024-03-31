import { Metadata } from "next";
import Table from "../components/table";
import { eventsExample } from "../api/data";
import { getRingSchedules } from "../api/sheets";
import { getAllEventCompetitors } from "../api/rings";
import { eventMap, getEventName } from "../api/utils";

export const metadata: Metadata = {
  title: "Event Standings",
};

const Event = async () => {
  const rings = await getRingSchedules();
  const eventsWithCompetitors = await getAllEventCompetitors(rings);
  const mycolumns = ["name", "place", "final score"];
  return (
    <div className="lg:text-lg animate-fade container lg:py-2 px-7 my-3 lg:my-10 overflow-hidden">
      {rings.map((events : string[], index : number) => (
        <>
        <div className="font-grotesksc text-5xl bg-gradient-to-r from-light-gold via-orange-200 to-int-gold bg-clip-text text-transparent font-bold h-auto">
          {index > 1 ? "Ring 3" : index > 0 ? "Ring 2" : "Ring 1"}
        </div>
        {events.map((event : string) => (
          <>
            <div className="font-grotesksc text-3xl bg-gradient-to-r from-light-gold via-orange-200 to-int-gold bg-clip-text text-transparent font-bold h-auto">
              {getEventName(event)}
            </div>
            <div>
              {//@ts-ignore
              eventsWithCompetitors?.get(event).map((competitor : any) => (
                <div>
                  {competitor.name}
                </div>
              ))}
            </div>
          </>
        ))}
        </>
      ))}
    </div>
  );
};

// {events.map((ringEvents : string[]) => (
//   <>
//     {/* <div className="font-grotesksc text-3xl font-bold text-gold mix-blend-screen"> */}
//     { ringEvents.map((event: string) => {
//         <>
//         <div className="font-grotesksc text-3xl bg-gradient-to-r from-light-gold via-orange-200 to-int-gold bg-clip-text text-transparent font-bold h-auto">
//           {event}
//         </div>
//         {/* <Table data={event} selectcolumns={mycolumns} /> */}
//         </>
//       })}
//   </>
// ))}

export default Event;

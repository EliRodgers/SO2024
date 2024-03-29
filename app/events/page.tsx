import { Metadata } from "next";
import Table from "../components/table";
import { eventsExample } from "../api/data";
import { getEventOrder } from "../api/sheets";

export const metadata: Metadata = {
  title: "Event Standings",
};

const Event = async () => {
  const events = await getEventOrder();
  // console.log(events);
  const mycolumns = ["name", "place", "final score"];
  return (
    <div className="lg:text-lg animate-fade container lg:py-2 px-7 my-3 lg:my-10 overflow-hidden">
      {events.map((ringEvents : string[], index : number) => (
        <>
        <div className="font-grotesksc text-5xl bg-gradient-to-r from-light-gold via-orange-200 to-int-gold bg-clip-text text-transparent font-bold h-auto">
          {index > 1 ? "Ring 3" : index > 0 ? "Ring 2" : "Ring 1"}
        </div>
        {ringEvents.map((event : string) => (
          <>
            <div className="font-grotesksc text-3xl bg-gradient-to-r from-light-gold via-orange-200 to-int-gold bg-clip-text text-transparent font-bold h-auto">
              {event}
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

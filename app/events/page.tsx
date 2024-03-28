import { Metadata } from "next";
import Table from "../components/table";
import { events } from "../api/data";

export const metadata: Metadata = {
  title: "Event Standings",
};

const Event = () => {
  // console.log(events);
  const mycolumns = ["name", "place", "final score"];
  return (
    <div className="lg:text-lg animate-fade container lg:py-2 px-7 my-3 lg:my-10 overflow-hidden">
      {events.map((event) => (
        <>
          {/* <div className="font-grotesksc text-3xl font-bold text-gold mix-blend-screen"> */}
          <div className="lg:mb-2 lg:text-5xl font-grotesksc text-3xl bg-gradient-to-r from-light-gold via-orange-200 to-int-gold bg-clip-text text-transparent font-bold">
            {event.name}
          </div>
          <Table data={event.competitors} selectcolumns={mycolumns} />
        </>
      ))}
    </div>
  );
};

export default Event;

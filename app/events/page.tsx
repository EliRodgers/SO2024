import { Metadata } from "next";
import Table from "../components/table";
import { events } from "../api/data";

export const metadata: Metadata = {
  title: "Event Standings",
};

const Event = () => {
  // console.log(events);
  return (
    <div className="lg:text-lg animate-fade container lg:py-2 px-7 my-3 lg:my-10 overflow-hidden">
      {events.map((event) => (
        <>
          <div className="font-grotesksc text-3xl font-bold">{event.name}</div>
          <div className="overflow-scroll">
            <Table data={event.competitors} selectcolumns={undefined} />
          </div>
        </>
      ))}
    </div>
  );
};

export default Event;

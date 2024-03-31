import Link from "next/link";
import { currentEventsExample } from "./api/data";
import Header from "./components/header";
import Table from "./components/table";
import { getCurrentEvents } from "./api/rings";
import { getRingSchedules } from "./api/sheets";
import { getEventName } from "./api/utils";

export default async function Home() {
  // const rings = await getRingSchedules();
  const rings = [["AFA101"], ["IFA101"], ["BMA102", "BFA201"]]
  const currentEvents = await getCurrentEvents(rings);
  const mycolumns = ["event", "current", "up next", "on deck"];
  return (
    <>
      <div className="lg:text-lg animate-fade container lg:py-2 px-7 my-5 lg:my-10 overflow-hidden">
        <Header />
        <div className="text-slate-400 my-2 text-balanced text-right">
          Welcome to the{" "}
          {/* <a
            className="font-bold underline decoration-1 text-slate-300 hover:text-bright-blue"
            href="http://collegiatewushu.org/home.php"
          > */}
          <Link
            href="http://collegiatewushu.org/home.php"
            rel="noopener noreferrer"
            target="_blank"
            className="font-bold underline decoration-1 text-slate-300 hover:text-bright-blue"
          >
            25th Annual Collegiate Wushu Tournament
          </Link>
          {/* </a> */}, hosted by UCLA Club Wushu. View live scores here!
        </div>
        {currentEvents.map((ring, index) => (
          <>
            <div className="font-grotesksc text-3xl bg-gradient-to-r from-light-gold via-orange-200 to-int-gold bg-clip-text text-transparent font-bold">
              {getEventName(ring.eventId)}
            </div>
            <Table data={currentEvents} selectcolumns={mycolumns} />
          </>
        ))}
      </div>
      {/* <TeamS />
      <EventS />
      <IndividualS /> */}
    </>
  );
}

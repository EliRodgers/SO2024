import Link from "next/link";
import { currentEventsExample } from "./api/data";
import Header from "./components/header";
import Table from "./components/table";
// import Modal from "./components/modal";
import { getCurrentEvents } from "./api/rings";
import { getRingSchedules } from "./api/sheets";
import { getEventName } from "./api/utils";

export const revalidate = 60; //revalidates cache every 10 seconds

export default async function Home() {
  const rings = await getRingSchedules();
  const currentEvents = await getCurrentEvents(rings);
  const mycolumns = ["event", "current", "up next", "on deck"];
  const query = "";
  const currentPage = 0;
  return (
    <>
      {/* <Modal /> */}
      {/* <div className="absolute top-[50rem] bg-almond -z-10 h-[32rem] w-full"></div> */}
      <div className="lg:text-lg container lg:py-2 px-7 my-5 lg:my-10 overflow-hidden">
        <Header />
        <div className="text-slate-400 my-5 text-sm lg:text-base text-balanced text-right">
          Welcome to the{" "}
          <Link
            href="http://collegiatewushu.org/home.php"
            rel="noopener noreferrer"
            target="_blank"
            className="font-bold underline decoration-1 text-slate-300 hover:text-bright-blue"
          >
            25th Annual Collegiate Wushu Tournament
          </Link>
          {/* </a> */}, hosted by UCLA Club Wushu. View live scores here!{" "}
          <br></br>
          <br></br>Click on competitor names to view more information.
        </div>
        {currentEvents?.map((ring, index) => {
          if (ring.eventId === undefined) {
            return <></>;
          }
          return (
            <div
              key={ring.eventId}
              className="flex md:items-center flex-col lg:py-5 lg:flex-row"
            >
              <div className="font-grotesksc basis-1/4 lg:text-5xl text-2xl bg-gradient-to-r from-light-gold via-orange-200 to-int-gold bg-clip-text text-transparent font-bold">
                {getEventName(ring.eventId)}
              </div>
              <div className=" basis-3/4">
                <Table
                  data={[currentEvents[index]]}
                  selectcolumns={mycolumns}
                  // query={query}
                  // currentPage={currentPage}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

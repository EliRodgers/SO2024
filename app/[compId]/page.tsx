import { Metadata } from "next";
import Table from "../components/table";
import { getCompetitorList } from "../api/sheets";
import Modal from "../components/modal";

export default async function Individual({
  params,
}: {
  params: { compId: number };
}) {
  const competitors = await getCompetitorList();
  //   console.log(competitors);

  const isEmptyArray = (arr: any[]) => {
    if (arr === undefined) return true;
    else return arr.length === 0;
  };

  let data: Array<any>;
  let cols: Array<any>;
  // const allcolumns = Object.keys(competitors[0]);
  function findMapByID(idToFind: any) {
    return competitors.find((comp: any) => comp.id === idToFind);
  }
  const idToFind = params.compId;
  const matchingCompetitor = findMapByID(idToFind);
  //   matchingCompetitor.forEach(())
  //   const selectColumns = ["expeirence", "gender", "school"];
  console.log(idToFind);
  console.log(matchingCompetitor);

  return (
    // <div id="individual" className="scroll-mt-96">
    <>
      <Modal />
      <div className="lg:text-lg animate-fade container lg:py-2 px-7 my-3 lg:my-10 overflow-hidden">
        {/* <div className=" grid h-32 w-full bg-gray-500"></div> */}
        <div className="mb-3 lg:mb-2 lg:text-5xl font-grotesksc text-3xl bg-gradient-to-r from-light-gold via-orange-200 to-int-gold bg-clip-text text-transparent font-bold">
          {matchingCompetitor.name}
        </div>
        <div className="text-slate-300 rounded-md border border-gray-500 bg-slate-900 p-4">
          <div className="text-white inline font-grotesksc font-bold text-lg">
            {" "}
            Gender:{" "}
          </div>
          {matchingCompetitor.gender} <br></br>
          <div className="text-white inline font-grotesksc font-bold text-lg">
            Experience:{" "}
          </div>{" "}
          {matchingCompetitor.experience} <br></br>
          <div className="text-white inline font-grotesksc font-bold text-lg">
            School:{" "}
          </div>{" "}
          {matchingCompetitor.school} <br></br>
          <br></br>
          <div className="text-white font-grotesksc font-bold text-lg">
            Events:{" "}
          </div>{" "}
          {matchingCompetitor.events.map((event: any) => (
            <>
              {event}
              <br></br>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
// export default Individual;

//"header" allows for custom header text
//SELECTCOLUMNS= can be omitted, and this will display all the attributes in the json

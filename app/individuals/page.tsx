import { Metadata } from "next";
import Table from "../components/table";
import SearchBar from "../components/searchbar";
import { Suspense } from "react";
import NotFound from "../components/not-found";
import { getCompetitorList } from "../api/sheets";
import Link from "next/link";
// import Modal from "../components/modal";

export const metadata: Metadata = {
  title: "Individual Scores",
};

export const revalidate = 180; //revalidates cache every 30 seconds

export default async function Individual({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const competitors = await getCompetitorList();
  const filteredCompetitors = competitors.filter((comp: any) =>
    JSON.stringify(comp).toLowerCase().includes(query.toLowerCase())
  );
  // console.log(filteredCompetitors);

  const isEmptyArray = (arr: any[]) => {
    if (arr === undefined) return true;
    else return arr.length === 0;
  };

  let data: Array<any>;
  let cols: Array<any>;
  // const allcolumns = Object.keys(competitors[0]);
  const mycolumns = ["name", "school", "experience"];
  // const realcols = allcolumns.filter((col) => selectcolumns.includes(col));
  // const columns = [
  //   ...realcols.map((key) => {
  //     return {
  //       field: key,
  //       header: key,
  //     };
  //   }),

  //   // { field: "name", header: "Name" },
  //   // { field: "school", header: "School" },
  //   // { field: "experience", header: "Experience" },
  // ];
  // console.log(realcols);
  return (
    // <div id="individual" className="scroll-mt-96">
    <>
      {/* <Modal /> */}
      <div className="lg:text-lg animate-fade container lg:py-2 px-7 my-3 lg:my-10 overflow-hidden">
        <div className="lg:mb-2 lg:text-5xl font-grotesksc text-3xl bg-gradient-to-r from-light-gold via-orange-200 to-int-gold bg-clip-text text-transparent font-bold">
          <div className="font-grotesk my-5 lg:mt-0">
            <SearchBar placeholder="Search competitors..." />
          </div>
          competitors
        </div>
        {isEmptyArray(filteredCompetitors) ? (
          <></>
        ) : (
          <Table data={filteredCompetitors} selectcolumns={mycolumns} />
        )}
      </div>
    </>
  );
}

// export default Individual;

//"header" allows for custom header text
//SELECTCOLUMNS= can be omitted, and this will display all the attributes in the json

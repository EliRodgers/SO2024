import { Metadata } from "next";
import Table from "../components/table";
import Link from "next/link";
import CompetitorList from "../competitors/CompetitorList";
import { competitors } from "../api/data";

export const metadata: Metadata = {
  title: "Individual Scores",
};

const Individual = () => {
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
    <div className="lg:text-lg animate-fade container lg:py-2 px-7 my-3 lg:my-10 overflow-hidden">
      <Table data={competitors} selectcolumns={mycolumns} />
      {/* <Table headers={[]} data={competitors} /> */}
      {/* <CompetitorList /> */}
      {/* </div> */}
    </div>
  );
};

export default Individual;

//"header" allows for custom header text
//SELECTCOLUMNS= can be omitted, and this will display all the attributes in the json

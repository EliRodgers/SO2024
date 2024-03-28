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
  const columns = [
    { field: "name", header: "Name" },
    { field: "school", header: "School" },
    { field: "experience", header: "Experience" },
  ];
  return (
    // <div id="individual" className="scroll-mt-96">
    <div className="lg:text-lg animate-fade container lg:py-2 px-7 my-3 lg:my-10 overflow-hidden">
      <Table data={competitors} cols={columns} />
      {/* <Table headers={[]} data={competitors} /> */}
      {/* <CompetitorList /> */}
      {/* </div> */}
    </div>
  );
};

export default Individual;

//"header" allows for custom header text

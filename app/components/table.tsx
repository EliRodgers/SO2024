import { table } from "console";
import Link from "next/link";
import React, { ReactNode } from "react";
import CompetitorList from "../competitors/CompetitorList";
import { headers } from "next/headers";

async function getCompetitors() {
  const res = await fetch("http://localhost:4000/competitors");

  return res.json();
}

const Table = ({ data, selectcolumns }: { data: any; selectcolumns: any }) => {
  // const competitors = await getCompetitors();

  if (selectcolumns == undefined) {
    selectcolumns = Object.keys(data[0]);
  }
  const allcolumns = Object.keys(data[0]); //THIS LINE GETS THE LEFT HAND SIDE STUFF IN THE JSON
  const realcols = allcolumns.filter((col) => selectcolumns.includes(col));
  const cols = [
    ...realcols.map((key) => {
      return {
        field: key,
        header: key,
      };
    }),

    // { field: "name", header: "Name" },
    // { field: "school", header: "School" },
    // { field: "experience", header: "Experience" },
  ];

  return (
    <table className="w-full mb-4">
      <thead>
        <tr className="capitalize text-lg font-grotesksc border-b">
          {cols.map((head: { header: ReactNode; field: any }) => (
            <th className="p-1 text-left">{head.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(
          (row: {
            gender: ReactNode;
            experience: ReactNode;
            school: ReactNode;
            name: ReactNode;
            id: ReactNode;
            row: any;
          }) => (
            <tr>
              {cols.map((col: { field: any }) => (
                <td className="text-sm text-slate-300 p-3 border-b border-slate-500">
                  <div className="w-fit">
                    {row[col.field as keyof typeof row]}
                  </div>
                </td>
              ))}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default Table;

//spread operator...
//map function

import { table } from "console";
import Link from "next/link";
import React, { ReactNode } from "react";
import CompetitorList from "../competitors/CompetitorList";
import { headers } from "next/headers";

async function getCompetitors() {
  const res = await fetch("http://localhost:4000/competitors");

  return res.json();
}

const Table = ({ data, cols }: { data: any; cols: any }) => {
  // const competitors = await getCompetitors();

  return (
    <table className="w-full mb-4">
      <thead>
        <tr className="text-xl font-grotesksc border-b">
          {cols.map((head: { header: ReactNode; field: any }) => (
            <th className="p-3 text-left">{head.header}</th>
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
                <td className="text-slate-300 p-3 border-b border-slate-500">
                  {row[col.field as keyof typeof row]}
                </td>
              ))}
            </tr>
          )
        )}
      </tbody>
    </table>
    // <tbody>
    //   {competitors.map((datum, index) => {
    //     return (
    //       <tr key={datum.id}>
    //         {Object.keys(headers).map((header, index) => {
    //           <td key={index}>
    //             <span>{datum[header]}</span>
    //           </td>;
    //         })}
    //       </tr>
    //     );
    //   })}
    // </tbody>

    // <table className="w-full border table-auto bg-black bg-opacity-35">
    //   <thead className="border border-b-gold bg-black bg-opacity-30">
    //     <tr>
    //       <th className="p-2">Competitor</th>
    //       <th>Experience</th>
    //       <th>School</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td>A</td>
    //       <td>1</td>
    //       <td>X</td>
    //     </tr>
    //     <tr>
    //       <td>B</td>
    //       <td>2</td>
    //       <td>Y</td>
    //     </tr>
    //     <tr>
    //       <td>C</td>
    //       <td>3</td>
    //       <td>Z</td>
    //     </tr>
    //   </tbody>
    // </table>
  );
};

export default Table;

//spread operator
//map function

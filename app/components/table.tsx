import head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";

const Table = ({
  data,
  selectcolumns,
}: // query,
// currentPage,
{
  data: any;
  selectcolumns: any;
  // query: string;
  // currentPage: number;
}) => {
  // const competitors = await getCompetitors();

  if (selectcolumns == undefined) {
    selectcolumns = Object.keys(data[0]);
  }
  const allcolumns = data ? Object.keys(data[0]) : null; //THIS LINE GETS THE LEFT HAND SIDE STUFF IN THE JSON
  const realcols = allcolumns?.filter((col) => selectcolumns.includes(col));
  const cols = [
    ...(realcols
      ? realcols.map((key) => {
          return {
            field: key,
            header: key,
          };
        })
      : []),

    // { field: "name", header: "Name" },
    // { field: "school", header: "School" },
    // { field: "experience", header: "Experience" },
  ];
  //helped me understand how to access the ids
  // const idList = data.map((competitor) => competitor.id);
  // console.log(idList);
  // const finalcols = realcols.filter((col) => cols.includes(query));

  // Filter data based on the query string
  // TRY TO FIX by removing object.values and .some
  // const filteredData = data.filter((row: any) =>
  //   Object.values(row).some((value: any) =>
  //     String(value).toLowerCase().includes(query.toLowerCase())
  //   )
  // );

  return (
    <table className="table-fixed w-full mb-4 lg:mb-8">
      <thead>
        <tr className="justify-between lg:text-2xl capitalize text-lg font-grotesksc border-b">
          {cols.map((head: { header: ReactNode; field: any }) => (
            <th key={head.field} className="p-1 text-left">
              {head.header}
            </th>
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
            id: any;
            row: any;
          }) => (
            <tr key={row.id}>
              {cols.map((col: { field: any }) => (
                <td
                  key={col.field}
                  className="lg:text-base text-sm text-slate-300 p-3 border-b border-slate-500"
                >
                  {row.id === undefined || col.field != "name" ? (
                    <div className="w-full">
                      {row[col.field as keyof typeof row]}
                    </div>
                  ) : (
                    <div className="hover:underline">
                      <Link href={`/${row.id}`} className="w-full">
                        {row[col.field as keyof typeof row]}
                      </Link>
                      {/* <div className="w-full">
                        {row[col.field as keyof typeof row]}
                      </div> */}
                    </div>
                  )}
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

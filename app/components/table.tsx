import { table } from "console";
import Link from "next/link";
import React from "react";

const Table = () => {
  return (
    <table className="w-full border table-auto bg-black bg-opacity-35">
      <thead className="border border-b-gold bg-black bg-opacity-30">
        <tr>
          <th className="p-2">Competitor</th>
          <th>Experience</th>
          <th>School</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A</td>
          <td>1</td>
          <td>X</td>
        </tr>
        <tr>
          <td>B</td>
          <td>2</td>
          <td>Y</td>
        </tr>
        <tr>
          <td>C</td>
          <td>3</td>
          <td>Z</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;

// const rows = [
//   {
//     key: "1",
//     name: "Tony Reichert",
//     role: "CEO",
//     status: "Active",
//   },
//   {
//     key: "2",
//     name: "Zoey Lang",
//     role: "Technical Lead",
//     status: "Paused",
//   },
//   {
//     key: "3",
//     name: "Jane Fisher",
//     role: "Senior Developer",
//     status: "Active",
//   },
//   {
//     key: "4",
//     name: "William Howard",
//     role: "Community Manager",
//     status: "Vacation",
//   },
// ];

// const columns = [
//   {
//     key: "name",
//     label: "NAME",
//   },
//   {
//     key: "role",
//     label: "ROLE",
//   },
//   {
//     key: "status",
//     label: "STATUS",
//   },
// ];

// export default function myTable() {
//   return (
//     <Table aria-label="Example table with dynamic content">
//       <TableHeader columns={columns}>
//         {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
//       </TableHeader>
//       <TableBody items={rows}>
//         {(item) => (
//           <TableRow key={item.key}>
//             {(columnKey) => (
//               <TableCell>{getKeyValue(item, columnKey)}</TableCell>
//             )}
//           </TableRow>
//         )}
//       </TableBody>
//     </Table>
//   );
// }

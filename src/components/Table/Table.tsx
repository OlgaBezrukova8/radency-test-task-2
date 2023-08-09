import React from "react";
import TableRow from "../TableRow/TableRow";
import { TableProps } from "../../types";

const Table: React.FC<TableProps> = ({ headers, body }) => (
  <div className="overflow-x-auto shadow">
    <table className="xl:table-fixed w-full border-separate">
      <thead className="bg-neutral-400">
        <tr>
          {headers.map((header, index) => (
            <th
              key={`${header}${index}`}
              scope="col"
              className="w-24 px-6 py-3 text-md text-left text-white font-semibold uppercase tracking-wide"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="">
        {body.map((rowData, index) => (
          <TableRow key={index + 1} rowData={rowData} />
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;

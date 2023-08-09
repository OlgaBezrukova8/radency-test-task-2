import React from "react";
import TableRow from "../TableRow/TableRow";
import { TableProps } from "../../types";

const Table: React.FC<TableProps> = ({ headers, body }) => (
  <div className="overflow-x-auto mb-4">
    <table className="xl:table-fixed w-full border-separate border-spacing-y-3">
      <thead className="bg-neutral-400">
        <tr>
          {headers.map((header, index) => {
            const currentHeader = headers[index];
            const lastHeaderClassName =
              currentHeader === headers[headers.length - 1] ? "w-16" : "";
            return (
              <th
                key={`${header}${index}`}
                scope="col"
                className={`w-28 px-6 py-3 text-md text-left text-white font-semibold uppercase tracking-wide ${lastHeaderClassName}`}
              >
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {body.map((rowData, index) => (
          <TableRow key={index + 1} rowData={rowData} />
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;

import React from "react";
import TableRow from "../TableRow/TableRow";
import { TableProps } from "../../types";

const Table: React.FC<TableProps> = ({ headers, body }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={`${header}${index}`}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((rowData, index) => (
          <TableRow key={index + 1} rowData={rowData} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

import React from "react";
import TableRow from "../TableRow/TableRow";
import { TableProps } from "../../types";
import "./Table.css";

const Table: React.FC<TableProps> = ({ headers, body }) => {
  return (
    <table className="container">
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

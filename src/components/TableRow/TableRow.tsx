import React from "react";
import TableCell from "../TableCell/TableCell";
import { TableRowProps } from "../../types";

const TableRow: React.FC<TableRowProps> = ({ rowData }) => {
  return (
    <tr>
      {Object.values(rowData).map((cellData, index) => (
        <TableCell key={index + 1} cellData={cellData} />
      ))}
    </tr>
  );
};

export default TableRow;

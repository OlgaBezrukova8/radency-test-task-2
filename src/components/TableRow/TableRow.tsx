import React from "react";
import TableCell from "../TableCell/TableCell";
import { TableRowProps } from "../../types";

const TableRow: React.FC<TableRowProps> = ({ rowData }) => {
  return (
    <tr className="bg-blue-50">
      {Object.values(rowData).map((cellData, index) => (
        <TableCell key={index + 1} cellData={cellData} />
      ))}
    </tr>
  );
};

export default TableRow;

import React from "react";
import { TableCellProps } from "../../types";

const TableCell: React.FC<TableCellProps> = ({ cellData }) => {
  return (
    <td className="px-6 py-4 text-stone-500 whitespace-nowrap text-ellipsis overflow-hidden">{cellData}</td>
  );
};

export default TableCell;

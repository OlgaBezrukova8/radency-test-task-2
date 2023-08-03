import React from "react";
import { TableCellProps } from "../../types";

const TableCell: React.FC<TableCellProps> = ({ cellData }) => {
  return <td>{cellData}</td>;
};

export default TableCell;

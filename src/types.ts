export interface TableProps {
  headers: string[];
  body: { [key: string]: any }[];
}

export interface TableRowProps {
  rowData: { [key: string]: any };
}

export interface TableCellProps {
  cellData: any;
}

import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface NoteProps {
  id: number;
  name: string;
  time: string;
  category: string;
  content: string;
  archived: boolean;
  created?: string | undefined; // TODO: Remove
  dates?: string | undefined;
}

export interface NoteStateProps {
  notes: NoteProps[];
  isLoading: boolean;
  error: string | null;
}

export interface SummaryProps {
  [category: string]: {
    activeCount: number;
    archivedCount: number;
  };
}

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

export interface BodyTableProps {
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
  actions: ReactNode;
}

export interface SummaryTableProps {
  category: string;
  activeCount: number;
  archivedCount: number;
}

export interface FormProps {
  noteData: NoteProps;
  onSubmit: (note: NoteProps) => void;
}

export interface DropdownProps {
  category: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export interface ArchiveNoteProps {
  id: number;
  archived: boolean;
}

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  type: "button" | "submit" | "reset" | undefined;
  key?: string | null;
  disabled?: boolean;
}

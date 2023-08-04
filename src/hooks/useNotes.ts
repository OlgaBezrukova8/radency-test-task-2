import { getNotes } from "../redux/notes/notes-selectors";
import { useAppSelector } from "./useApp";
import { NoteProps } from "../types";

export const useNotes = (): NoteProps[] => {
  const notes = useAppSelector(getNotes);
  return notes;
};

import { getNotes } from "../redux/notes/notes-selectors";
import { NoteProps } from "../redux/notes/notes-slice";
import { useAppSelector } from "./useApp";

export const useNotes = (): NoteProps[] => {
  const notes = useAppSelector(getNotes);
  return notes;
};

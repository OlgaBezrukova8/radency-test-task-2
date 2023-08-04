import { RootState } from "../store";

export const getNotes = (state: RootState) => state.notes.notes;
export const getIsLoading = (state: RootState) => state.notes.isLoading;

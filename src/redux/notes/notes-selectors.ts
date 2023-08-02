import { RootState } from "../store";

export const getNote = (state: RootState) => state.notes.notes;
export const getIsLoading = (state: RootState) => state.notes.isLoading;
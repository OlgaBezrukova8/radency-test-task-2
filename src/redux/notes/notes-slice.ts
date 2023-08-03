import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addNote, updateNote, deleteNote, getNotes } from "./notes-operations";

export interface NoteProps {
  id: string;
  name: string;
  time: string;
  category: string;
  content: string;
}

interface NoteStateProps {
  notes: NoteProps[];
  isLoading: boolean;
  error: string | null;
}

const initialState: NoteStateProps = {
  notes: [],
  isLoading: false,
  error: null,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNotes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getNotes.fulfilled,
        (state, { payload }: PayloadAction<NoteProps[]>) => {
          state.notes = payload;
          state.isLoading = false;
        }
      )
      .addCase(getNotes.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = (payload as string) || "Failed to get notes";
      })
      .addCase(addNote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        addNote.fulfilled,
        (state, { payload }: PayloadAction<NoteProps>) => {
          state.notes = [...state.notes, payload];
          state.isLoading = false;
        }
      )
      .addCase(addNote.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = (payload as string) || "Failed to add notes";
      })
      .addCase(
        // TODO: add pending and rejected
        updateNote.fulfilled,
        (state, { payload }: PayloadAction<NoteProps>) => {
          state.notes = state.notes.map((notes) => {
            if (notes.id === payload.id) {
              notes = {
                id: payload.id,
                name: payload.name,
                time: payload.time,
                category: payload.category,
                content: payload.content,
              };
            }
            return notes;
          });
        }
      )
      .addCase(
        // TODO: add pending and rejected
        deleteNote.fulfilled,
        (state, { payload }: PayloadAction<string>) => {
          state.notes = state.notes.filter((note) => note.id !== payload);
          state.isLoading = false;
        }
      );
  },
});

export default notesSlice.reducer;

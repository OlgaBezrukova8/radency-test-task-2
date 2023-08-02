import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addNote, updateNote, deleteNote } from "./notes-operations";

export interface NoteProps {
  id: string;
  name: string;
  //   created: string;
  //   category: string;
  content: string;
  //   dates: string[];
  //   archived: boolean;
}

interface NoteStateProps {
  notes: NoteProps[];
  isLoading: boolean;
  error: {};
}

const initialState: NoteStateProps = {
  notes: [],
  isLoading: false,
  error: {},
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      // TODO: check when add api to addNote
      //   .addCase(
      //     addNote.rejected,
      //     (state, { payload }: PayloadAction<NoteProps>) => {
      //       state.isLoading = false;
      //       state.error = payload;
      //     }
      //   )
      .addCase(
        updateNote.fulfilled,
        (state, { payload }: PayloadAction<NoteProps>) => {
          state.notes = state.notes.map((notes) => {
            if (notes.id === payload.id) {
              notes = {
                id: payload.id,
                name: payload.name,
                content: payload.content,
              };
            }
            return notes;
          });
        }
      )
      .addCase(
        deleteNote.fulfilled,
        (state, { payload }: PayloadAction<string>) => {
          state.notes = state.notes.filter((note) => note.id !== payload);
          state.isLoading = false;
        }
      );
  },
});

export default notesSlice.reducer;

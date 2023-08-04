import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addNote,
  updateNote,
  deleteNote,
  getNotes,
  archiveNote,
} from "./notes-operations";
import notesContent from "../../data/notesContent.json";
import { ArchiveNoteProps, NoteProps, NoteStateProps } from "../../types";

const initialState: NoteStateProps = {
  notes: notesContent,
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
      .addCase(updateNote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        updateNote.fulfilled,
        (state, { payload }: PayloadAction<NoteProps>) => {
          state.notes = state.notes.map((note) => {
            if (note.id === payload.id) {
              note = {
                id: payload.id,
                name: payload.name,
                time: note.time,
                category: payload.category,
                content: payload.content,
                archived: note.archived,
              };
            }
            return note;
          });
        }
      )
      .addCase(updateNote.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = (payload as string) || "Failed to update notes";
      })
      .addCase(deleteNote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        deleteNote.fulfilled,
        (state, { payload }: PayloadAction<number>) => {
          state.notes = state.notes.filter((note) => note.id !== payload);
          state.isLoading = false;
        }
      )
      .addCase(deleteNote.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = (payload as string) || "Failed to delete notes";
      })
      .addCase(archiveNote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        archiveNote.fulfilled,
        (state, { payload }: PayloadAction<ArchiveNoteProps>) => {
          state.notes = state.notes.map((note) => {
            if (note.id === payload.id) {
              note = {
                id: note.id,
                name: note.name,
                time: note.time,
                category: note.category,
                content: note.content,
                archived: payload.archived,
              };
            }
            return note;
          });
        }
      )
      .addCase(archiveNote.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = (payload as string) || "Failed to archive notes";
      });
  },
});

export default notesSlice.reducer;

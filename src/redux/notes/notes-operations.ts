import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { ArchiveNoteProps, NoteProps } from "../../types";

export const getNotes = createAsyncThunk(
  "notes/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("notes-content.json");
      return data;
    } catch (error) {
      return rejectWithValue(`Failed to get notes: ${error}`);
    }
  }
);

export const addNote = createAsyncThunk<
  NoteProps,
  NoteProps,
  { state: RootState }
>("notes/add", async (note, { rejectWithValue }) => {
  try {
    return note;
  } catch (error) {
    return rejectWithValue(`Failed to add note: ${error}`);
  }
});

export const updateNote = createAsyncThunk<
  NoteProps,
  NoteProps,
  { state: RootState }
>("notes/update", async (updatedNote, { rejectWithValue }) => {
  try {
    return updatedNote;
  } catch (error) {
    return rejectWithValue(`Failed to update note: ${error}`);
  }
});

export const deleteNote = createAsyncThunk<
  number,
  number,
  { state: RootState }
>("notes/delete", async (noteId: number, { rejectWithValue }) => {
  try {
    return noteId;
  } catch (error) {
    return rejectWithValue(`Failed to delete note: ${error}`);
  }
});

export const archiveNote = createAsyncThunk<
  ArchiveNoteProps,
  ArchiveNoteProps,
  { state: RootState }
>("notes/archive", async (isArchived, { rejectWithValue }) => {
  try {
    return isArchived;
  } catch (error) {
    return rejectWithValue(`Failed to archive note: ${error}`);
  }
});

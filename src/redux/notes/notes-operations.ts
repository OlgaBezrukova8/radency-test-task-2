import { createAsyncThunk } from "@reduxjs/toolkit";
import { NoteProps } from "./notes-slice";

// TODO: think about get note
export const getNote = createAsyncThunk(
  "notes/get",
  async (note: NoteProps) => {
    // Simulate an API call or async operation here
    return note;
  }
);

export const addNote = createAsyncThunk(
  "notes/add",
  async (note: NoteProps) => {
    // Simulate an API call or async operation here
    return note;
  }
);

export const updateNote = createAsyncThunk(
  "notes/update",
  async (note: NoteProps) => {
    // Simulate an API call or async operation here
    return note;
  }
);

export const deleteNote = createAsyncThunk(
  "notes/delete",
  async (noteId: string) => {
    // Simulate an API call or async operation here
    return noteId;
  }
);

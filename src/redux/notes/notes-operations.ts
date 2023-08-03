import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { NoteProps } from "./notes-slice";

export const getNotes = createAsyncThunk("notes/get", async () => {
  try {
    const response = await axios.get("notes-content.json");
    return response.data;
  } catch (error) {
    console.error("Error get notes :", error);
    return [];
  }
});

// createAsyncThunk<Response, string> ???
export const addNote = createAsyncThunk(
  "notes/add",
  async (note: NoteProps) => {
    return note;
  }
);

export const updateNote = createAsyncThunk(
  "notes/update",
  async (note: NoteProps) => {
    return note;
  }
);

export const deleteNote = createAsyncThunk(
  "notes/delete",
  async (noteId: string) => {
    return noteId;
  }
);

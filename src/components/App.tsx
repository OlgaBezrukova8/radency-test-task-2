import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/useApp";
import { useNotes } from "../hooks/useNotes";
import Layout from "./Layout/Layout";
import Table from "./Table/Table";
import Form from "./Form/Form";
import Button from "./Button/Button";
import ButtonsSet from "./ButtonsSet/ButtonsSet";
import Modal from "./Modal/Modal";
import {
  updateNote,
  getNotes,
  archiveNote,
  deleteNote,
  addNote,
} from "../redux/notes/notes-operations";

import { summaryTableHead, tableHead } from "../data/tableHead";
import { formatDate, formatCurrentDate } from "../utils/formatDate";
import formatParsedDate from "../utils/formatParsedDate";
import { generateRandomId } from "../utils/randomIdGenerator";
import {
  BodyTableProps,
  ArchiveNoteProps,
  NoteProps,
  SummaryProps,
  SummaryTableProps,
} from "../types";

import createSummary from "../utils/createSummary";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formModeAddNote, setFormModeAddNote] = useState(false);
  const [currentEditNote, setCurrentEditNote] = useState<NoteProps>();

  const notes = useNotes();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  const onEditNote = (noteContent: NoteProps) => {
    setIsFormOpen(true);
    setCurrentEditNote(noteContent);
  };

  const updateNoteContent = (noteContent: NoteProps) => {
    dispatch(updateNote(noteContent));
    setIsFormOpen(false);
  };

  const addNoteContent = (noteContent: NoteProps) => {
    dispatch(addNote(noteContent));
    setIsFormOpen(false);
    setFormModeAddNote(false);
  };

  const onArchiveNote = (isArchive: ArchiveNoteProps) => {
    dispatch(archiveNote(isArchive));
  };

  const onDeleteNote = (noteId: number) => {
    dispatch(deleteNote(noteId));
  };

  const onAddNote = () => {
    setIsFormOpen(true);
    setFormModeAddNote(true);
    setCurrentEditNote({
      id: generateRandomId(),
      name: "",
      category: "",
      content: "",
      archived: false,
      time: formatCurrentDate(),
    });
  };

  const getCurrentNotes = (isArchive: boolean) => {
    return notes.filter((note) => note.archived === isArchive);
  };

  const createNotesTableBody = (
    notesData: NoteProps[],
    isArchiveTable: boolean
  ) => {
    const object = notesData.map((note) => {
      const { name, time, category, content } = note;
      const body: BodyTableProps = {
        name: name,
        created: formatDate(time),
        category: category,
        content: content,
        dates: formatParsedDate(content),
        actions: (
          <ButtonsSet
            noteData={note}
            isArchive={isArchiveTable}
            onEditNote={onEditNote}
            onArchiveNote={onArchiveNote}
            onDeleteNote={onDeleteNote}
          />
        ),
      };
      return body;
    });
    return object;
  };

  const createSummaryTable = (summary: SummaryProps): SummaryTableProps[] => {
    return Object.entries(summary).map(
      ([category, { activeCount, archivedCount }]) => ({
        category,
        activeCount,
        archivedCount,
      })
    );
  };

  const activeNotes = getCurrentNotes(false);
  const archivedNotes = getCurrentNotes(true);

  return (
    <Layout>
      {activeNotes.length > 0 && (
        <Table
          headers={tableHead}
          body={createNotesTableBody(activeNotes, false)}
        />
      )}
      <Button
        type="button"
        onClick={() => {
          onAddNote();
        }}
      >
        Add note
      </Button>
      {currentEditNote && (
        <Modal isOpen={isFormOpen}>
          <Form
            noteData={currentEditNote}
            onSubmit={formModeAddNote ? addNoteContent : updateNoteContent}
          />
        </Modal>
      )}
      {archivedNotes.length > 0 && (
        <Table
          headers={tableHead}
          body={createNotesTableBody(archivedNotes, true)}
        />
      )}
      <Table
        headers={summaryTableHead}
        body={createSummaryTable(createSummary(notes))}
      />
    </Layout>
  );
}

export default App;

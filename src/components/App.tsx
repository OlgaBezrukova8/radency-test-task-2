import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/useApp";
import { useNotes } from "../hooks/useNotes";
import Layout from "./Layout/Layout";
import Table from "./Table/Table";
import Form from "./Form/Form";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import {
  updateNote,
  getNotes,
  archiveNote,
  deleteNote,
  addNote,
} from "../redux/notes/notes-operations";

import { summaryTableHead, tableHead } from "../data/tableHead";
import formatDate from "../utils/formatDate";
import formatParsedDate from "../utils/formatParsedDate";

import {
  BodyTableProps,
  ArchiveNoteProps,
  NoteProps,
  SummaryProps,
  SummaryTableProps,
} from "../types";

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
    const options: Intl.DateTimeFormatOptions = {
      // TODO: Move to formatDate
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentEditNote({
      id: new Date().getTime(),
      name: "",
      category: "",
      content: "",
      archived: false,
      time: new Date().toLocaleDateString("en-US", options),
    });
  };

  const getCurrentNotes = (isArchive: boolean) => {
    return notes.filter((note) => note.archived === isArchive);
  };

  const createTableBody = (notesData: NoteProps[]) => {
    const object = notesData.map(
      ({ id, name, time, category, content, archived }) => {
        const body: BodyTableProps = {
          name: name,
          created: formatDate(time),
          category: category,
          content: content,
          dates: formatParsedDate(content),
          actions: (
            <div>
              <Button
                type="button"
                onClick={() =>
                  onEditNote({ id, time, name, category, content, archived })
                }
              >
                Edit
              </Button>
              <Button
                type="button"
                onClick={() => {
                  onDeleteNote(id);
                }}
              >
                Delete
              </Button>
              <Button
                type="button"
                onClick={() => {
                  onArchiveNote({ id, archived: !archived });
                }}
              >
                Archive
              </Button>
            </div>
          ),
        };

        return body;
      }
    );

    return object;
  };

  const createArchiveTableBody = (notesData: NoteProps[]) => {
    const object = notesData.map(
      ({ id, name, time, category, content, archived }) => {
        const body: BodyTableProps = {
          name: name,
          created: formatDate(time),
          category: category,
          content: content,
          dates: formatParsedDate(content),
          actions: (
            <div>
              <Button
                type="button"
                onClick={() => {
                  onDeleteNote(id);
                }}
              >
                Delete
              </Button>
              <Button
                type="button"
                onClick={() => {
                  onArchiveNote({ id, archived: !archived });
                }}
              >
                Unarchive
              </Button>
            </div>
          ),
        };

        return body;
      }
    );

    return object;
  };

  // We need to have separated props to store category - counters for optimization purposes to access the corresponding counters by key -> acc[category],
  const createSummary = (): SummaryProps => {
    const summary: SummaryProps = notes.reduce((acc: SummaryProps, note) => {
      const { category } = note;
      const isArchived = note.archived === true;

      if (!acc[category]) {
        acc[category] = {
          activeCount: 0,
          archivedCount: 0,
        };
      }

      if (isArchived) {
        acc[category].archivedCount++;
      } else {
        acc[category].activeCount++;
      }

      return acc;
    }, {});
    return summary;
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
        <Table headers={tableHead} body={createTableBody(activeNotes)} />
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
          body={createArchiveTableBody(archivedNotes)}
        />
      )}
      <Table
        headers={summaryTableHead}
        body={createSummaryTable(createSummary())}
      />
    </Layout>
  );
}

export default App;

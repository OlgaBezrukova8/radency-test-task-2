import React from "react";
import { useNotes } from "../hooks/useNotes";
import Table from "./Table/Table";
import tableHead from "../data/tableHead";
import formatDate from "../utils/formatDate";
import formatParsedDate from "../utils/formatParsedDate";

function App() {
  const notes = useNotes();

  const createTableBody = () => {
    // TODO: move function to utils
    // TODO: add id to work with all operations
    const object = notes.map(({ id, name, time, category, content }) => {
      const body = {
        name: name,
        created: formatDate(time),
        category,
        content,
        dates: formatParsedDate(content),
        actions: <button>wow</button>,
      };

      return body;
    });

    return object;
  };

  // TODO: move Table component to a container

  return (
    <div>
      <Table headers={tableHead} body={createTableBody()} />
    </div>
  );
}

export default App;

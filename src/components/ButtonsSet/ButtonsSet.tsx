import React from "react";
import Button from "../Button/Button";
import { ButtonsSetProps } from "../../types";

const ButtonsSet: React.FC<ButtonsSetProps> = ({
  noteData,
  isArchive,
  onEditNote,
  onArchiveNote,
  onDeleteNote,
}) => {
  return (
    <div className="buttons-container">
      {!isArchive && (
        <Button type="button" onClick={() => onEditNote(noteData)}>
          Edit
        </Button>
      )}
      <Button
        type="button"
        onClick={() => {
          onDeleteNote(noteData.id);
        }}
      >
        Delete
      </Button>
      <Button
        type="button"
        onClick={() => {
          onArchiveNote({ id: noteData.id, archived: !noteData.archived });
        }}
      >
        {isArchive ? "Unarchive" : "Archive"}
      </Button>
    </div>
  );
};

export default ButtonsSet;

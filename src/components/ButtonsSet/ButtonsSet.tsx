import React from "react";
import { MdEdit, MdDelete, MdArchive, MdUnarchive } from "react-icons/md";
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
    <div className="">
      {!isArchive && (
        <Button type="button" onClick={() => onEditNote(noteData)}>
          <MdEdit />
        </Button>
      )}
      <Button
        type="button"
        onClick={() => {
          onDeleteNote(noteData.id);
        }}
      >
        <MdDelete />
      </Button>
      <Button
        type="button"
        onClick={() => {
          onArchiveNote({ id: noteData.id, archived: !noteData.archived });
        }}
      >
        {isArchive ? <MdUnarchive /> : <MdArchive />}
      </Button>
    </div>
  );
};

export default ButtonsSet;

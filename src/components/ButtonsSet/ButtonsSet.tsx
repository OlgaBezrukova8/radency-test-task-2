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
    <div className="flex justify-center items-center">
      {!isArchive && (
        <Button type="button" onClick={() => onEditNote(noteData)}>
          <MdEdit size={28} />
        </Button>
      )}
      <Button
        type="button"
        onClick={() => {
          onDeleteNote(noteData.id);
        }}
      >
        <MdDelete size={28} />
      </Button>
      <Button
        type="button"
        onClick={() => {
          onArchiveNote({ id: noteData.id, archived: !noteData.archived });
        }}
      >
        {isArchive ? <MdUnarchive size={28} /> : <MdArchive size={28} />}
      </Button>
    </div>
  );
};

export default ButtonsSet;

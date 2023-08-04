import React, { useState, useEffect } from "react";
import { FormProps } from "../../types";
import Dropdown from "../Dropdown/Dropdown";

const Form: React.FC<FormProps> = ({ noteData, onSubmit }) => {
  const [noteContent, setNoteContent] = useState(noteData);

  useEffect(() => {
    setNoteContent(noteData);
  }, [noteData]);

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(value);
    setNoteContent((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      noteContent.name.trim() === "" ||
      noteContent.category.trim() === "" ||
      noteContent.content.trim() === ""
    ) {
      alert("Please fill in all the required fields.");
    } else {
      onSubmit(noteContent);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={noteContent.name}
          onChange={onChange}
        />
      </div>
      <div>
        <label>Category:</label>
        <Dropdown category={noteContent.category} onChange={onChange} />
      </div>
      <div>
        <label>Content:</label>
        <input
          type="text"
          name="content"
          value={noteContent.content}
          onChange={onChange}
        />
      </div>

      <button type="submit">Update</button>
    </form>
  );
};

export default Form;

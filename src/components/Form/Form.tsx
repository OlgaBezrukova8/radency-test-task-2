import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown/Dropdown";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { FormProps } from "../../types";

const Form: React.FC<FormProps> = ({
  noteData,
  onSubmit,
  onClose,
  formModeAdd,
}) => {
  const [noteContent, setNoteContent] = useState(noteData);

  useEffect(() => {
    setNoteContent(noteData);
  }, [noteData]);

  const onChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setNoteContent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

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

  const buttonTitle = formModeAdd ? "Create" : "Update";

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <FormInput
          label="Name:"
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
        <FormInput
          label="Content:"
          type="text"
          name="content"
          value={noteContent.content}
          onChange={onChange}
        />
      </div>

      <Button type="submit">{buttonTitle}</Button>
      <Button type="button" onClick={onClose}>
        Cancel
      </Button>
    </form>
  );
};

export default Form;

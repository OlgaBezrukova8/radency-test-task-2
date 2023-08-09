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
      <div className="mb-4">
        <FormInput
          label="Name:"
          type="text"
          name="name"
          value={noteContent.name}
          onChange={onChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Category:</label>
        <Dropdown category={noteContent.category} onChange={onChange} />
      </div>
      <div className="mb-4">
        <FormInput
          label="Content:"
          type="text"
          name="content"
          value={noteContent.content}
          onChange={onChange}
        />
      </div>

      <div className="flex justify-end">
        <Button
          type="button"
          onClick={onClose}
          className="mr-4 px-6 py-2 bg-red-200 hover:bg-red-300 rounded text-gray-500 hover:text-white font-medium"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="px-6 py-2 bg-emerald-200 hover:bg-emerald-300 rounded text-gray-500 hover:text-white font-medium"
        >
          {buttonTitle}
        </Button>
      </div>
    </form>
  );
};

export default Form;

import React from "react";
import { NotesForm } from "./NotesForm";
import { createNote } from "./api";
import { useHistory } from "react-router-dom";


export const CreateNote = () => {
  const history = useHistory()
  
  const onSubmit = async (data) => {
    await createNote(data)
    history.push("/")
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Create Note Item</h3>
        <NotesForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
import React, { useState, useEffect } from "react";
import { NotesForm } from "./NotesForm";
import { useRouteMatch, useHistory } from "react-router-dom";
import { deleteNote, getNote, updateNote } from "./api";


export const EditNote = () => {
  const match = useRouteMatch()
  const [note, setNote] = useState();
  const history = useHistory()

  useEffect(() => {
    const fetchNote = async () => {
      const note = await getNote(match.params.id)
      setNote(note)
    }
    fetchNote()
  }, []);

  const onSubmit = async (data) => {
    await updateNote(data, match.params.id)
    history.push("/")

  }

  

  return note ?  (
  <div className="container">
  <div className="mt-3">
    <h3>Edit Note</h3>
  <NotesForm note={note} onSubmit={onSubmit}/>
  </div>
  </div>
 ):( <div>Login</div>);
 
};

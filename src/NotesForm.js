import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export const NotesForm = ({note, onSubmit}) =>{

    const {register, handleSubmit} = useForm({ defaultValues:{text: note? note.text : ""} }) 
    const history = useHistory()
  
    const submitHandler = handleSubmit((data) =>{
        onSubmit(data)
        history.push("/")
    });

    return (
      
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="text">
                        Text: 
                    </label>
                    <input className="form-control" ref={register} type="text" name="text" id="text"></input>
                    <div className="form-group">
                    <button type="submit" className="btn btn-primary">Save Note</button>
                    </div>
                </div>
            </form>
      );
}
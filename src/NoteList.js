import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { getNotes } from "./api"

export const NoteList = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const notes = await getNotes()
      setItems(notes)
    }
    fetchItems()
  }, [])

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Note List</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Text</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map(notes => (
                <tr key={notes._id}>
                  <td>
                    {notes.text}
                  </td>
                  <td>
                    <Link to={`/edit/${notes._id}`}>Edit</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
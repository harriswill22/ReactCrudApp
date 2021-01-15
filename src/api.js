export const getNotes = () => fetch("http://localhost:4000/").then(res => res.json())

export const createNote = (note) => fetch("http://localhost:4000/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(note)
})  

export const updateNote = (note, id) => fetch(`http://localhost:4000/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(note)
})  

export const getNote = (id) => fetch(`http://localhost:4000/${id}`).then(res => res.json())
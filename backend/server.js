const express = require("express")
const cors = require("cors")

const mongoose = require("mongoose")
const Note = require("./Models/Note")

mongoose.connect("mongodb://127.0.0.1:27017/notes", { useNewUrlParser: true });

mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});

const PORT = 4000;

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    Note.find((err, notes) => {
      if (err) {
        console.log(err);
      } else {
        res.json(notes);
      }
    });
  });
  
  app.post("/create", (req, res) => {
    const notes = new Note(req.body);
    notes
      .save()
      .then((notes) => {
        res.json(notes);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  });
  
  
  app.get("/:id", (req, res) => {
    const id = req.params.id;
    Note.findById(id, (err, notes) => {
      res.json(notes);
    });
  });
  
  app.post("/:id", (req, res) => {
    const id = req.params.id;
    Note.findById(id, (err, note) => {
      if (!note) {
        res.status(404).send("Note not found");
      } else {
        note.text = req.body.text;
  
        note
          .save()
          .then((note) => {
            res.json(note);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });

app.listen(PORT, () =>{
    console.log("Server is running on port " + PORT )
})

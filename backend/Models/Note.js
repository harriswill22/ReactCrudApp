const mongoose = require("mongoose")

const Note = mongoose.Schema({
    text:{
        type: String
    }
})

module.exports = mongoose.model('Note', Note)
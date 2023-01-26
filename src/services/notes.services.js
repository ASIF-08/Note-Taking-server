const mongoose = require("mongoose");
const Notes = mongoose.model("Note");

const fetchNotes = (userId) => {
    return Notes.find({author: userId});
};

const createNote = (note) => {
    return Notes.create(note);
};

const getNoteById = (noteId) => {
    return Notes.findById(noteId);
};

const updateNote = (noteId, note) => {
    return Notes.findByIdAndUpdate(noteId, note);
};

const starNote = (noteId, stared) => {
    return Notes.findByIdAndUpdate(noteId, {stared: !stared});
};

const getStaredNotes = (userId) => {
    return Notes.find({author: userId, stared: true});
};

const deleteNote = (noteId) => {
    return Notes.findByIdAndDelete(noteId);
};

module.exports = {
    fetchNotes,
    createNote,
    getNoteById,
    updateNote,
    starNote,
    getStaredNotes,
    deleteNote
};
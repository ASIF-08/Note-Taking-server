const express = require("express");
const router = express.Router();
const NotesCtrls = require("../controllers/notes.controllers");
const {authenticate, authorize} = require("../middlewares/auth");

router.get("/getnotes", authenticate, NotesCtrls.fetchNotes);
router.get("/getnote/:id", authenticate, NotesCtrls.getNoteById);
router.post("/createnote", authenticate, NotesCtrls.createNote);
router.patch("/updatenote/:id", authenticate, NotesCtrls.updateNote);
router.patch("/starnote/:id", authenticate, NotesCtrls.starNote);
router.get("/getstarednotes", authenticate, NotesCtrls.getStaredNotes);
router.delete("/deletenote/:id", authenticate, NotesCtrls.deleteNote);

module.exports = router;
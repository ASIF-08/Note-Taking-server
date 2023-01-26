const { Errors } = require("../constants");
const NotesServices = require("../services/notes.services.js");

const fetchNotes = async (req, res, next) => {
    try {
        const response = await NotesServices.fetchNotes(res.locals.claims.userId);
        res.status(200).json({
            status: "success",
            data: response
        });
    } catch (err) {
        return next(err);
    }
};

const createNote = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        const error = new Error("Request body is missing, and needs to have the new notes's details");
        error.name = Errors.BadRequest;
        return next(error);
    }

    try {
        const note = {
            ...req.body,
            author: res.locals.claims.userId
        };
        const response = await NotesServices.createNote(note);
        return res.status(200).json({
            status: "success",
            data: response
        });
    } catch (err) {
        return next(err);
    }
};

const getNoteById = async (req, res, next) => {
    try {
        const response = await NotesServices.getNoteById(req.params.id);
        res.status(200).json({
            status: "success",
            data: response
        });
    } catch (err) {
        return next(err);
    }
};

const updateNote = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        const error = new Error("Request body is missing, and needs to have the new note's details");
        error.name = Errors.BadRequest;
        return next(error);
    }

    try {
        const note = {
            ...req.body,
            edited: true
        };
        const response = await NotesServices.updateNote(req.params.id, note);
        if (response === null) {
            const error = new Error(`A note with id ${id} does not exist`);
            error.name = Errors.NotFound;
            return next(error);
        }

        res.json({
            status: 'success',
            data: response
        });
    } catch (err) {
        return next(err);
    }
};

const starNote = async (req, res, next) => {
    try {
        const stared = await NotesServices.getNoteById(req.params.id);
        const response = await NotesServices.starNote(req.params.id, stared.stared);
        res.status(200).json({
            status: "success",
            data: response
        });
    } catch (err) {
        return next(err);
    }
};

const getStaredNotes = async (req, res, next) => {
    try{
        const response = await NotesServices.getStaredNotes(res.locals.claims.userId);
        res.status(200).json({
            status: "success",
            data: response
        });
    } catch(err) {
        return next(err);
    }
};

const deleteNote = async (req, res, next) => {
    try {
        const response = await NotesServices.deleteNote(req.params.id);
        res.status(200).json({
            status: "sucess",
            data: response
        });
    } catch (err) {
        return next(err);
    }
};

module.exports = {
    fetchNotes,
    createNote,
    getNoteById,
    updateNote,
    starNote,
    getStaredNotes,
    deleteNote
}
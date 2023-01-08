const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    edited :{
        type: Boolean,
        default: false
    },
    stared: {
        type: Boolean,
        default: false
    }
});

mongoose.model("Note", noteSchema);
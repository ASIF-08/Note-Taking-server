require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const { connect } = require('./data/init')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors());
app.use(express.static(path.join(process.cwd(), "public")));

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/notes", require("./routes/notes.routes"));

app.use(function (req, res, next) {
    res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

// error handling middlewares
app.use(require("./middlewares/errors").resourcenNotFound);
app.use(require("./middlewares/errors").errorHandler);

connect()
    .then(() => {
        app.listen(3001, () => {
            console.log(`started on ${process.env.PORT}`);
        });
    })
    .catch(error => {
        process.exit(1);
    });

app.listen(process.env.PORT, (req, res) => {
    console.log("Started!!");
});
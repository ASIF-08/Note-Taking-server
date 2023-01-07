require("dotenv").config();
const express = require("express");
const { validateHeaderName } = require("http");
const { dirname } = require("path");
const app = express();
const path = require('path')
const cors = require("cors");
const {connect} = require('./data/init')


app.use(cors())

app.use (express.static( path.join( process.cwd(), 'public' ) ) );
// app.get("/",(req,res) => {
//     res.sendFile(path.join(__dirname,"about.html"))
// });
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "about.html"));
// });

app.get("/api",(req,res) => {
    res.json({
        status: "success",
        data: {
            name:"asif",
            email:"asif@gmail.com",
            token:"tokenabcdefgh",
            role:"admin"
        }
    })
});


connect()
    .then(() => {
        app.listen(3001,()=>{
        console.log(`started on ${process.env.PORT}`);
        });
    })
    .catch(error =>{
        process.exit(1);
    });

app.listen(3000, (req, res) => {
    console.log("Started!!");
});
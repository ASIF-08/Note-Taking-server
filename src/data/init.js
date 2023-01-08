const mongoose = require("mongoose");

mongoose.set('returnOriginal', false);
mongoose.set("runValidators", true)

//create models
require("../models/Users");
require("../models/Notes");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
console.log("env --> ", process.env.DB_NAME)

const connectionStr = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
console.log(`connecting to database ${DB_NAME}`);

const connect = async () => {
    try {
        await mongoose.connect(connectionStr);
        console.log(`Connect to database ${DB_NAME}`);
    } catch (error) {
        console.error(`Could not connect to database ${DB_NAME}, error =`, error.message);
        process.exit(1);
    }
};

module.exports = {
    connect
};
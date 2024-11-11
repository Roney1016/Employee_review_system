const mongoose = require("mongoose");
require('dotenv').config();
// Connection to mongodb.
// mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect('mongodb://127.0.0.1:27017/Manish')
mongoose.connect("mongodb+srv://testdevlopment28:Zt2kXPijW4YPxEG5@cluster0.0pfhe.mongodb.net/myDatabaseName?retryWrites=true&w=majority");



const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("DATABASE connection is Established");
});

// exporting the connection.
module.exports = db;
// Zt2kXPijW4YPxEG5
// testdevlopment28
const exp = require('constants');
const express = require('express');
const port = 8000;
const app = express();

app.get('/', function (req, res) {
    res.send("cool it is running")
})

app.listen(port, function (err) {
    if (err) {
        console.log("Error in running the server", err)
    }
    console.log(`Server is running on port: ${port}`);
})

const express = require('express');
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');

// set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(expressLayouts);

// app.get('/', function (req, res) {

//     res.send("cool it is running")
// })
// use express router
app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) {
        console.log("Error in running the server", err)
    }
    console.log(`Server is running on port: ${port}`);
})

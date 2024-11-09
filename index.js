const express = require('express');

const app = express();
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser'); // parse cookie header and populate req.cookies
const bodyParser = require('body-parser'); // parses incoming request bodies (req.body)

const db = require('./config/database')
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

const MongoStore = require('connect-mongo');
// set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(expressLayouts);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    name: 'Employee_review_system',
    // TODO: change secret before deployment
    secret: "abcd",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore({
        mongoUrl: 'mongodb://127.0.0.1:27017/Manish',  // use your database connection here
        autoRemove: 'native' // optional, removes expired sessions automatically
    })
}));
app.use(passport.initialize());
app.use(passport.session());
// sets the authenticated user in the response
app.use(passport.setAuthenticatedUser);

// use express router
app.use('/', require('./routes'));

const port = process.env.PORT || 8000;

app.listen(port, function (err) {
    if (err) {
        console.log("Error in running the server", err)
    }
    console.log(`Server is running on port: ${port}`);
})

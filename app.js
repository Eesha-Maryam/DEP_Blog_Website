const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const routes = require('./Routes');
const app = express();

//Middleware for handling the sessions
app.use(session({
    secret: 'secret', 
    resave: true,
    saveUninitialized: true
}));

app.use(methodOverride('_method'));
app.use(flash());
// Setting  views directory and view engine as ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Serving static files from the 'public' directory in mycase images
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
//starting server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

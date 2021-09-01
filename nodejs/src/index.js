const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');

//connect to db
db.connect();

// HTTP logger
// app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
); //handle data sent form HTMl
app.use(express.json()); //handle data sent from code js

// XMLHttprequest,fetch,axios,       Can send data through get and post method

// template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Home, search, contact

// routes init

route(app);

// 127.0.0.1 => localhost
app.listen(port, () =>
    console.log(` App listening at http://localhost:${port}`),
);
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');

// HTTP logger
app.use(morgan('combined'));


app.use(express.static(path.join(__dirname, 'public')));
// template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));



// route
// around function
app.get('/news', (req, res) => {
    res.render('news');
})
app.get('/', (req, res) => {
        res.render('home');
    })
    // normal function
    // app.get('/', function (req, res)  {
    //   return  res.send('Hello World!')
    // })

// 127.0.0.1 => localhost
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`))
const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // around function
    // Action---> Dispatcher ---> Function handler

    pp.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
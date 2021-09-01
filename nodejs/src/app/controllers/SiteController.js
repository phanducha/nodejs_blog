const Course = require('../models/Course');

class SiteController {
    //[GET] /news
    index(req, res) {
        Course.find({}, function(err, courses) {
            if (!err) {
                res.json(courses);
            } else {
                res.status(400).json({ error: 'Message' })
            }
        });
    }

    // res.render('home');


    //[GET] /search    biến động
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
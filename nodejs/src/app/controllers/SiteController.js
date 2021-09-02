const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../ultil/mongoose');
class SiteController {
    //[GET] /news
    index(req, res, next) {


        Course.find({})
            .then(courses => {
                // courses = courses.map(course => course.toObject())
                res.render('home', {
                        courses: mutipleMongooseToObject(courses)
                    }) // {courses} stand for    { courses : courses} cause the similar name
            })
            .catch(next); //  .catch(error => next(error));
    }




    //[GET] /search    biến động
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
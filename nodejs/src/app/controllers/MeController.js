const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../ultil/mongoose');
class MeController {
    //[GET] /news

    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-Courses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next);
    }
}

module.exports = new MeController();
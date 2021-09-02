const Course = require('../models/Course');
const { mongooseToObject } = require('../../ultil/mongoose');
class CourseController {
    //[GET] /news

    //[GET] /course/:slug
    show(req, res, next) {

        Course.findOne({ slug: req.params.slug })
            .then(course => //promises
                res.render('courses/show', { course: mongooseToObject(course) })
            )
            .catch(next);


    }
}

module.exports = new CourseController();
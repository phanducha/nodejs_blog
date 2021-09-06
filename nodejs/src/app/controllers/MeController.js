const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../ultil/mongoose');
class MeController {

    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-Courses', {
                    deletedCount,
                    courses: mutipleMongooseToObject(courses)
                }))
            .catch(next);


        //combine 2 function to 1 function above
        // Course.countDocumentsDeleted()
        //     .then((deletedCount) => {

        //     })
        //     .catch();
        // Course.find({})
        //     .then(courses => res.render('me/stored-Courses', {
        //         courses: mutipleMongooseToObject(courses)
        //     }))
        //     .catch(next);
    }

    //[GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-Courses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next);
    }
}

module.exports = new MeController();
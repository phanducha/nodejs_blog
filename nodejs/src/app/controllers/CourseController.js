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
        //[GET] /course/create
    create(req, res, next) {
            res.render('courses/create');

        }
        //[POST] /course/store
    store(req, res, next) {
            // res.json(req.body)
            const formData = req.body;
            formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
            const course = new Course(formData);
            course.save()
                .then(() => res.redirect('/me/stored/courses'))
                .catch(error => {});
        }
        //[GET] /course/:id/create
    edit(req, res, next) {
            Course.findById(req.params.id)
                .then(course => res.render('courses/edit', {
                    course: mongooseToObject(course)
                }))
                .catch(next);

        }
        //[PUT] /course/:id
    update(req, res, next) {
            Course.updateOne({ _id: req.params.id }, req.body)
                .then(() => res.redirect('/me/stored/courses')) //res.redirect : điều hướng sang path mới
                .catch(next);
        }
        //[Delete] /course/:id
    destroy(req, res, next) {
            Course.delete({ _id: req.params.id })
                .then(() => res.redirect('back'))
                .catch(next);
        }
        //[Delete] /course/:id/force
    forceDestroy(req, res, next) {
            Course.deleteOne({ _id: req.params.id })
                .then(() => res.redirect('back'))
                .catch(next);
        }
        //[PATCH] /course/:id/restore
    restore(req, res, next) {
            Course.restore({ _id: req.params.id })
                .then(() => res.redirect('back'))
                .catch(next);
        }
        //[PATCH] /course/handle-form-acion
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action is Invalid !!!' })

        }

    }
}

//GET,POST,PUT,PACTH,DELETE,OPTIONS,HEAD
// GET: SEND REQUEST TO SERVER AND SERVER RESPONSE DATA FOR CLIENT
// POST: SEND REQUEST TO SERVER AND REQUEST SERVER SAVE OR CREATE A NEW DATA
// PUT/PATCH : CHANGE/REPAIR DATA   PUT: CHANGE AND REPLACE ALL DATA
// PATCH : REPAIR AND REPLACE EACH FEILD
module.exports = new CourseController();
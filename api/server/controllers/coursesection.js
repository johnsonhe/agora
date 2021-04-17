const CourseSection = require('../models').CourseSection;

module.exports = {
  create(req, res) {
    return CourseSection
      .create({
        content: req.body.content,
        courseId: req.params.courseId,
      })
      .then(section => res.status(201).send(section))
      .catch(error => res.status(400).send(error));
  },
};
const CourseSection = require('../models').CourseSection;

module.exports = {
  create(req, res) {
    return CourseSection
      .create({
        title: req.body.title,
        content: req.body.content,
        support: 0,
        forumId: req.params.courseId,
        userId: req.params.userId,
      })
      .then(section => res.status(201).send(section))
      .catch(error => res.status(400).send(error));
  },
};
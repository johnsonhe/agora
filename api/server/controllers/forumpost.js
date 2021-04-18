const CourseSection = require('../models').ForumPosts;

module.exports = {
  create(req, res) {
    return ForumPosts
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
  destroy(req, res) {
    return ForumPost
      .findByPk(req.params.forumPostId)
      .then(ForumPost => {
        if (!ForumPost) {
          return res.status(400).send({
            message: 'Forum Post Not Found',
          });
        }
        return ForumPost
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
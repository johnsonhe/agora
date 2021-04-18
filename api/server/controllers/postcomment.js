const PostComment = require('../models').PostComment;

module.exports = {
  create(req, res) {
    return PostComment
      .create({
        content: req.body.content,
        support: 0,
        postId: req.params.postId,
        userId: req.params.userId,
      })
      .then(comment => res.status(201).send(comment))
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return PostComment
      .findByPk(req.params.postCommentId)
      .then(PostComment => {
        if (!PostComment) {
          return res.status(400).send({
            message: 'Post Comment Not Found',
          });
        }
        return PostComment
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
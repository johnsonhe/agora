const Forum = require('../models').Forum;

module.exports = {
  create(req, res) {
    return Forum
      .create({
        posts: 0,
        agorumId: req.params.agorumId,
      })
      .then(Forum => res.status(201).send(Forum))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Forum
      .findAll({
        include: [{
          model: ForumPost,
          as: 'posts',
        },
        {
          model: PostComment,
          as: 'comments',
        }],
      })
      .then(Forum => res.status(200).send(Forum))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Forum
      .findByPk(req.params.forumId)
      .then(Forum => {
        if (!Forum) {
          return res.status(404).send({
            message: 'Forum Not Found',
          });
        }
        return res.status(200).send(Forum);
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Forum
      .findByPk(req.params.ForumId)
      .then(Forum => {
        if (!Forum) {
          return res.status(400).send({
            message: 'Forum Not Found',
          });
        }
        return Forum
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
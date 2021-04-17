const Forum = require('../models').Forum;

module.exports = {
  create(req, res) {
    return Forum
      .create({
        posts: 0,
        agorumId: req.params.agorumId,
      })
      .then(course => res.status(201).send(course))
      .catch(error => res.status(400).send(error));
  },
};
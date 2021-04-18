const Contribution = require('../models').Contribution;

module.exports = {
  create(req, res) {
    return Contribution
      .create({
        courseId: req.params.courseId,
        user: req.body.user,
        content: req.body.content
      })
      .then(contribution => res.status(201).send(contribution))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Contribution
      .findAll()
      .then(contribution => res.status(200).send(contribution))
      .catch(error => res.status(400).send(error));
  },
};
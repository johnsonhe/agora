const Contribution = require('../models').Contribution;

module.exports = {
  create(req, res) {
    return Contribution
      .create({
        courseId: req.params.courseId,
        userId: req.body.userId,
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
  retrieve(req, res) {
    return Contribution
      .findByPk(req.params.contributionId)
      .then(Contribution => {
        if (!Contribution) {
          return res.status(404).send({
            message: 'Contribution Not Found',
          });
        }
        return res.status(200).send(Contribution);
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Contribution
      .findByPk(req.params.contributionId)
      .then(Contribution => {
        if (!Contribution) {
          return res.status(400).send({
            message: 'Contribution Not Found',
          });
        }
        return Contribution
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
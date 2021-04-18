const CourseProposal = require('../models').CourseProposal;

module.exports = {
  create(req, res) {
    return CourseProposal
      .create({
        support: 0,
        description: req.body.content
      })
      .then(proposal => res.status(201).send(proposal))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return CourseProposal
      .findAll()
      .then(proposal => res.status(200).send(proposal))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return CourseProposal
      .findByPk(req.params.proposalId)
      .then(CourseProposal => {
        if (!CourseProposal) {
          return res.status(404).send({
            message: 'Course Proposal Not Found',
          });
        }
        return res.status(200).send(CourseProposal);
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return CourseProposal
      .findByPk(req.params.proposalId)
      .then(CourseProposal => {
        if (!CourseProposal) {
          return res.status(400).send({
            message: 'Course Proposal Not Found',
          });
        }
        return CourseProposal
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
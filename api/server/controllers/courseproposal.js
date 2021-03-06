const CourseProposal = require('../models').CourseProposal;

module.exports = {
  create(req, res) {
    return CourseProposal
      .create({
        title: req.body.title,
        support: 0,
        description: req.body.description,
        contributors: req.body.contributors,
        category: req.body.categories
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
  update(req, res) {
    return CourseProposal
      .findByPk(req.params.proposalId)
      .then(CourseProposal => {
        if (!CourseProposal) {
          return res.status(404).send({
            message: 'ProposalID Not Found',
          });
        }
        return CourseProposal
          .update({
            title: req.body.title || CourseProposal.title,
            support: req.body.support || CourseProposal.support,
            description: req.body.description || CourseProposal.description,
            contributors: req.body.contributors || CourseProposal.contributors,
            category: req.body.category || CourseProposal.category,
          })
          .then(CourseProposal => res.status(200).send(CourseProposal))
          .catch(error => res.status(400).send(error));
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
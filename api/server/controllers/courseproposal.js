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
};
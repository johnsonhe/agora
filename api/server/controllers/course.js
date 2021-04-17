const Course = require('../models').Course;

module.exports = {
  create(req, res) {
    return Course
      .create({
        name: req.body.name,
        agorumId: req.params.agorumId,
      })
      .then(course => res.status(201).send(course))
      .catch(error => res.status(400).send(error));
  },
};
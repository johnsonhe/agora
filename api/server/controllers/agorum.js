const Agorum = require('../models').Agorum;
const Course = require('../models').Course;
const Forum = require('../models').Forum;

module.exports = {
  create(req, res) {
    return Agorum
      .create({
        name: req.body.name,
        members: 0,
      })
      .then(agorum => res.status(201).send(agorum))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Agorum
      .findAll({
        include: [{
          model: Course,
          as: 'course',
        }],
      })
      .then(agorum => res.status(200).send(agorum))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Agorum
      .findByPk(req.params.agorumId, {
        include: [{
          model: Course,
          as: 'course',
        },
        {
          model: Forum,
          as: 'forum',
        }],
      })
      .then(Agorum => {
        if (!Agorum) {
          return res.status(404).send({
            message: 'Agorum Not Found',
          });
        }
        return res.status(200).send(Agorum);
      })
      .catch(error => res.status(400).send(error));
  },
};
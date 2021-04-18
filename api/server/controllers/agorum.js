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
      .then(Agorum => res.status(201).send(Agorum))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Agorum
      .findAll({
        include: [{
          model: Course,
          as: 'courses',
        },
        {
          model: Forum,
          as: 'forums',
        }],
      })
      .then(Agorum => res.status(200).send(Agorum))
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
  lookup(req, res) {
    return Agorum
      .findAll({
        where: {
          name: req.params.name
        }
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
  destroy(req, res) {
    return Agorum
      .findByPk(req.params.agorumId)
      .then(Agorum => {
        if (!Agorum) {
          return res.status(400).send({
            message: 'Agorum Not Found',
          });
        }
        return Agorum
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
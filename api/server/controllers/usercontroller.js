const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
      .create({
        name: req.body.name,
        username: req.body.usrname,
        password: req.body.password,
        email: req.body.email
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return User
      .findById(req.params.id, {
        include: [{
          model: UserInfo,
          as: 'userInfo',
        }],
      })
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(todo);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return User
      .find({
          where: {
            id: req.params.id
          },
        })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'UserID Not Found',
          });
        }
  
        return user
          .update({
            name: req.body.name || user.name,
            username: req.body.username || user.username,
            password: req.body.password || user.password,
            email: req.body.email || user.email,
          })
          .then(updatedUser => res.status(200).send(updatedUser))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  
  destroy(req, res) {
    return User
      .find({
          where: {
            id: req.params.id          },
        })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'UserId Not Found',
          });
        }
  
        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
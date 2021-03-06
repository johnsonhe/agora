const User = require('../models').User;
const ForumPost = require('../models').ForumPost;
const PostComment = require('../models').PostComment;
const Contribution = require('../models').Contribution;

module.exports = {
  create(req, res) {
    return User
      .create({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
      })
      .then(user => res.status(201).send(user))
      .catch(error => {
        res.status(400).send(error.toString());
        console.log(error)
      });
  },
  list(req, res) {
    return User
      .findAll({
        include: [{
          model: Contribution,
          as: 'contributions'
        },
        {
          model: ForumPost,
          as: 'forumposts'
        },
        {
          model: PostComment,
          as: 'postcomments'
        }],
      })
      .then(User => res.status(200).send(User))
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
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(user);
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
            id: req.params.id          
          },
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
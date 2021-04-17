const agorum = require('../controllers').agorum;
const course = require('../controllers').course;
const user = require('../controllers').user;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/agorum', agorum.create);
  app.get('/api/agorum', agorum.list);

  app.post('/api/agorum/:agorumId/course', course.create);

  app.post('/api/user', user.create);
};

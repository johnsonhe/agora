const agorum = require('../controllers').agorum;
const course = require('../controllers').course;
const user = require('../controllers').user;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Agorum API!',
  }));

  app.post('/api/agorum', agorum.create);
  app.get('/api/agorum', agorum.list);
  app.get('/api/agorum/:agorumId', agorum.retrieve)
  app.get('/api/agorum/lookup/:name', agorum.lookup)
  app.delete('/api/agorum/:agorumId', agorum.destroy)

  app.post('/api/agorum/:agorumId/course', course.create);

  app.post('/api/user', user.create);
};

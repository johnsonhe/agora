const agorum = require('../controllers').agorum;
const user = require('../controllers').user;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/agorum', agorum.create);

  app.post('/api/user', user.create);
};

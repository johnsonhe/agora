var express = require('express');
var router = express.Router();

app.use(express.json());

//temp sample users , will be replaced by db
const users = [

  {id:1, name: 'Johnson'},
  {id:2, name: 'Jacob'},
  {id:3, name: 'Darian'},
  {id:4, name: 'Victor'},
  {id:5, name: 'Sam'}

];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/api/users', (req,res) => {
  res.send(users);
})

router.get('/api/users/:id', (req,res) => {
  const user = users.find(c => c.id === parseInt(req.params.id));
  if (!user) res.status(404).send('This user ID was not found');
  res.send(user);
})

router.post('/api/users', (req,res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(user);
  res.send(user);
})

module.exports = router;

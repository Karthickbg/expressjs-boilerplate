const routes = require('express').Router();
const users = require('./users');


routes.use('/api/v1', users);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
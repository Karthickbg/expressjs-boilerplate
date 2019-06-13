import bodyParser from 'body-parser';
const users = require('express').Router();
const userController = require('../../controllers/userController')
users.use(bodyParser.json());
users.use(bodyParser.urlencoded({ extended: true }));

users.get('/users', userController.getUsers);
users.post('/users', userController.PostUsers);

module.exports = users;
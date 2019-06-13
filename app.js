import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const routes = require('./src/routes');
const app = express();
var port = 8080;
var server = app.listen(port);

app.use('/', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());







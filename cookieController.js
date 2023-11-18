const fetch = require('node-fetch');
const mongoose = require('mongoose');
const Task = require('./models/task.model');
require('dotenv').config();

const cookieController = {}

cookieController.setCookie = (req, res, next) => {
  // res.cookie( /*Cookie Name*/, /*Cookie Value*/);
  next();
}

modules.exports = cookieController
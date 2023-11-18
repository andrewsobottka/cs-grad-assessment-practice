const fetch = require('node-fetch');
const mongoose = require('mongoose');
require('dotenv').config();

// const un = 'admin'
// const pw = 'XTcXozqAv01tavUq'
const URI = "mongodb+srv://admin:XTcXozqAv01tavUq@grad-assessment.xu1kxgk.mongodb.net/?retryWrites=true&w=majority"

const controllers = {}

controllers.getAllTasks = (req, res, next) => {
  console.log('getting all tasks...');
  mongoose.connect(URI)
  .then(() => {
    console.log('connected to mongodb...')
  });
}

module.exports = controllers;

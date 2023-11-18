const fetch = require('node-fetch');
const mongoose = require('mongoose');
const Task = require('./models/task.model');
require('dotenv').config();

const URI = "mongodb+srv://admin:XTcXozqAv01tavUq@grad-assessment.xu1kxgk.mongodb.net/?retryWrites=true&w=majority"

const controllers = {}

controllers.getAllTasks = (req, res, next) => {
  console.log('getting all tasks...');
  mongoose.connect(URI)
  .then(() => {
    Task.find({})
    .then((response)=>{
      res.locals.allItems = response;
      next();
    })
  });
}

controllers.createNewTask = (req, res, next) => {
  console.log('creating new task...')
  const newTask = new Task ({
    taskName: req.body.taskName,
    date: Date.parse(req.body.date),
    status: req.body.status,
  });
  mongoose.connect(URI)
  .then(() => {
    newTask.save()
    .then((response) => {
      if(response) {
        res.locals.newItem = response;
        next();
      } else {
        next({
          log: 'Error in controllers.createNewItem',
          status: 500,
          message: { err: 'Error creating item' }
        })
      }
    })
  });
}


/** COOKIES */

controllers.setCookie = (req, res, next) => {
  res.cookie('codesmith');
  let randomValue = (Math.floor(Math.random() * 99));
  res.cookie('secret', randomValue);
  next();
}

module.exports = controllers;

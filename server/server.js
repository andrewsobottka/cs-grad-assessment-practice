const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');


app.use(express.json());
app.use(cors());

// Import controllers
const controllers = require('./controllers');

// Read tasks from database; return home page
app.use(express.static('client')) // send all home page files to client

app.get('/git ', controllers.getAllTasks, (req, res) => {
  response = 'server says hi'
  console.log(response)
  return res.status(200).send(response); // send back data received from server
});

// [AFS] Add routes to handle create, update, delete


// Return 404 for any endpoints not specified above
app.use('*', (req, res) => res.sendStatus(404));

// Global error handler with default error object
app.use((err, req, res, next) => { 
  const defaultError = {
    log: 'unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }
  }
  const error = Object.assign(defaultError, err);
  console.log(error.log);
  return res.status(error.status).json(error.message);
});


// listens on port 3000 -> http://localhost:3000/
app.listen(3000, () => {
  console.log('Listening on port 3000')
}); 

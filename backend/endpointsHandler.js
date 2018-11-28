const express = require('express');

const endpointsHandler = express();
const responses = [ { message: "ezigen" }, { message: "success" } ];

endpointsHandler.use('/helloworld', (req, res) => {
  res.json(responses[0]);
});

endpointsHandler.use('/secondroute', (req, res) => {
  res.json(responses[1]);
});

endpointsHandler.use('/', (req, res) => {
  res.send('Please, add to the URL either "/helloworld" or "/secondroute".');
});

module.exports = endpointsHandler;
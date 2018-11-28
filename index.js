const http = require('http');
const endpointsHandler = require('./backend/endpointsHandler');

const server = http.createServer(endpointsHandler);

server.listen(3000);

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Test message');
});

server.listen(3000);

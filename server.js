const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;
const server = http.createServer(app);  // http force to swithc to app.js file

server.listen(port);
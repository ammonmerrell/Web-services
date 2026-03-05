const express = require('express')
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'))

app.listen(port, () => (console.log(`running on port ${port}`)));

// const http = require('node:http');
// const hostname = 'localhost';
// const port = 8080;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('hello World');
    
    
// });

// server.listen(port, hostname, () => {
//     console.log(`server running at http://${hostname}:${port}/professional`);
// });
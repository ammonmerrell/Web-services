const express = require('express')


const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 8080;

//new additions below -------------------

app.use(express.static('cse341-ww-student-code-w01-2-team-frontendStart/frontend'));

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/cse341-ww-student-code-w01-2-team-frontendStart/frontend/');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).json();
});

//end of new additions---------------

app.use('/', require('./routes'))


mongodb.initDb((err) => {
    if(err) {
        console.log(err)
    }
    else{
        app.listen(port, () => (console.log(`Database is listining and node running on port ${port}`)));
    }
});



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
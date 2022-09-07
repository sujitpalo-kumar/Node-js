const http = require('http');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');


dotenv.config({path : './config/config.env'});

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;


const server = http.createServer((request, response) => {
    let requestedURL = request.url;
    console.log(requestedURL);
    response.statusCode = 200; // successful response
    response.setHeader('Content-Type' , 'text/html');
    fs.readFile(path.join(__dirname, 'views' , 'index.html'), 'utf-8' , (err , data) => {
        if(err) throw  err;
        response.end(data);
    });
});

// listen
server.listen(port, hostname, () => {
    console.log(`Node JS server is started at http://${hostname}:${port}`);
});

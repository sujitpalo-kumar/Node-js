const http = require('http');
const dotenv = require('dotenv');

// configure dotenv
dotenv.config({path : './config/config.env'});

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;


const server = http.createServer((request, response) => {
    response.statusCode = 200; 
    response.setHeader('Content-Type' , 'text/html');
    response.end(`<h2 style="color: white;background-color: limegreen">Welcome  Node JS</h2>`);
});

// listen
server.listen(port, hostname, () => {
    console.log(`Node JS server is started at http://${hostname}:${port}`);
});

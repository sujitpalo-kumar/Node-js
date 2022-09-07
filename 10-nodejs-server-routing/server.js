const http = require('http');
const dotenv = require('dotenv');
const router = require('./router/appRouting');


dotenv.config({path : './config/config.env'});

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

const server = http.createServer((request, response) => {
    response.statusCode = 200; // successful response
    response.setHeader('Content-Type' , 'text/html');

    // Routing
    router.mapRoutes(request , response);
});

// listen
server.listen(port, hostname, () => {
    console.log(`Node JS server is started at http://${hostname}:${port}`);
});

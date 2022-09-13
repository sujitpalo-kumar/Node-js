const dotenv = require('dotenv');
const express = require('express');
const app = express();
const path = require('path');

// configure dot-env
dotenv.config({path : './config/config.env'});

app.use(express.json());
app.use(express.urlencoded({extended : false}));

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

app.get('/', (request, response) => {
    response.send(`<h2>Welcome to Express Server REST API</h2>`);
});

app.use('/employees', require('./router/employeeRouter'));

app.listen(port, hostname, () => {
    console.log(`Express Server Started at http://${hostname}:${port}`);
});

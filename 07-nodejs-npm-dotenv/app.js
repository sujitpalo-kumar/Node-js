const dotenv = require('dotenv');
dotenv.config({path:'./config/config.env'})


console.log(`jwt sc key :${process.env.JWT_SECRET_KEY}`)
console.log(`server url:  ${process.env.UAT_SERVER_URL}`)
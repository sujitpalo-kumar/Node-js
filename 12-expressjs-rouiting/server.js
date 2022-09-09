const express= require('express')
const app= express()
const dotenv= require('dotenv')
const rout= require('./router/appRouter')


dotenv.config({path:'./config/config.env'})

const hostname= process.env.HOST_NAME;
const port =process.env.PORT;

app.use('/public',express.static('public'));

app.use('/',rout)

// app.use('/',require('./router/appRouter'))

app.listen(port,hostname,()=>{
    console.log(`Express server started at http://${hostname}:${port}`)
})

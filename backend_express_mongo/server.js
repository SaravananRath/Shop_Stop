const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const app = express()
const port = 3001
var routes = require('./app/routes/product.routes')
routes(app)

mongoose.connect(dbConfig.url,{ useNewUrlParser: true })
    .then(()=>{
        console.log('Succesfully Connected to Database')
    })
    .catch(err=>{
        console.log('Could not connect to the database')
        process.exit()
    })


app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())
// app.get('/',express.static(__dirname+'/views/index.html'))



app.listen(port,()=>{
    console.log("Server is listening on Port",port)
})
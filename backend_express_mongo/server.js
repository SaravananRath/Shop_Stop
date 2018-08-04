const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config')
const mongoose = require('mongoose')
var cors = require('cors');

mongoose.Promise = global.Promise
const app = express()
const port = 3001
app.use(cors())
app.set('view engine', 'pug');
app.set('views','./app/views');

// app.use()
var routes = require('./app/routes/product.routes')
routes(app)

mongoose.connect(dbConfig.url,{ useNewUrlParser: true })
    .then(()=>{
        console.log('Mongoose Succesfully Connected to Database')
    })
    .catch(err=>{
        console.log('Mongoose Could not connect to the database')
        process.exit()
    })





app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())
// app.get('/',express.static(__dirname+'/views/index.html'))

// console.log(__dirname + '/app/public')

app.use(express.static(__dirname + '/app/public/uploads'))

app.listen(port,()=>{
    console.log("Server is listening on Port",port)
})
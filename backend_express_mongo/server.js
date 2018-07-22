const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const app = express()
const port = 3001

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

app.get('/',(req,res)=>{
    res.json({"message":"Welcome to the products page"})
})

app.listen(port,()=>{
    console.log("Server is listening on Port",port)
})
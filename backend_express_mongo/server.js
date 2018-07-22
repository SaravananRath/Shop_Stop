const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const port = 3001
app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.json({"message":"Welcome to the products page"})
})

var server=app.listen(port,()=>{
    console.log("Server is listening on Port",port)
})
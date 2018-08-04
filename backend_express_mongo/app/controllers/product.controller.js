var path = require('path')
const Product = require('../models/product.model')
const fs = require('fs')
const { body,validationResult} = require('express-validator/check')
var Promise = require('promise');
var async = require("async");
var MongoClient = require('mongodb').MongoClient

exports.create = (req,res) =>{
    body('productName','Enter Product Name').isLength({min:1})
    const errors = validationResult(req)
    // if(!errors.isEmpty()){
    let arr = Object.assign(req.files)
    arr = arr.map(x=>x.filename)
    var myData = new Product(req.body)
    var discountedPrice = req.body.productPrice - (req.body.productDiscount*req.body.productPrice)/100
    // var img = fs.readFileSync(req.file.path)
    // myData.image.data=img
    // myData.image.contentType='image/jpg'
    myData.imageUrls=arr
    myData.discountedPrice=discountedPrice
    myData.save()
        .then(item=>res.send('Product Saved'+item))
        .catch(err=>{res.status(400).send('Unable to save to database'+err)})

    // // }
    // else{
    //     // res.sendFile(path.resolve('app/views/index.html'),req.body)
    //     // res.send('Invalid Name')
    //     res.render('form', {
    //         // name: "TutorialsPoint",
    //         // url:"http://www.tutorialspoint.com"
    //         productCount:req.body.productCount
    //     })
    //     // res.send("Hurray")
    // }

}

exports.findAll = (req,res) =>{
    Product.find({}).then(product=>{
        console.log()
        res.send(product)
    })

}

exports.findOne = (req,res) =>{
    // console.log(req.params)
    Product.findById(req.params.productId)
        .then(product=>{
            if(!product) {
                return res.status(404).send({
                    message: 'Product not found with the id'
                })
            }
            res.send(product)
        })
}
exports.checkUpdate = (req,res)=>{
    var params = (JSON.parse(req.params.cartProducts))
    // console.log(params)
    var arr = []
    params.map(p=>{
        arr.push(p.name)
    })
    // console.log(arr)
    Product.find({productName:{$in:arr}},'productCount productName').then(product=>{
        // console.log(product)
        // res.send(product)
        countValidate(params,product,res)
    }).catch(function(error){console.log(error)})

}


function countValidate(clientCount,serverCount,res){
    // console.log(clientCount,serverCount)
    var bool = true
    var arr = ['insufficientInventory']
    for(var i=0;i<clientCount.length;i++) {
        if (clientCount[i].quantity <= serverCount[i].productCount)    {
            // console.log('Sufficient',clientCount[i].name,serverCount[i].productName)
        }
        else {
            bool = false
            console.log('InSufficient',clientCount[i].name)
            arr.push(clientCount[i].name)
            // break
        }
    }
        if(!bool){
            console.log('insufficientInventory')
            res.send(arr)
        }
        if(bool){
             console.log('sufficientInventory')
             res.send(['sufficientInventory'])
        }

          // console.log(clientCount[i].quantity,serverCount[i].productCount)

        // console.log('looping')

}
exports.update = (req,res) =>{
    var params = (JSON.parse(req.params.cartProducts))
    counter = 0;
    console.log(params.length)

    MongoClient.connect('mongodb://localhost:27017/shop_stop',{useNewUrlParser: true} ,function (err, client) {
        if (err) throw err
        var db = client.db('shop_stop')
        var bulk = db.collection('products').initializeOrderedBulkOp()

        for(var i=0;i<params.length;i++){
            var name = params[i].name
            var quantity = params[i].quantity
            bulk.find({productName:name}).update({$inc:{productCount:-quantity}})
            counter++
        }

        if(counter===params.length) {
            bulk.execute(function (err, result) {
                if (err) console.log(err)
                if (result) {
                    console.log(result)
                    console.log(result.nModified)
                }
            })
            res.send('Updated')
        }
        // db.collection('products').find().toArray(function (err, result) {
        //     if (err) throw err
        //     console.log(result)
        // })
        // db.collection.bulkWrite([])

    })
}

exports.delete = (req,res)=>{

}
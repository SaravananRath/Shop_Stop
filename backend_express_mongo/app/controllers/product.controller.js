var path = require('path')
const Product = require('../models/product.model')
const fs = require('fs')
const { body,validationResult} = require('express-validator/check')
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

    // console.log(myData)
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
        res.send(product)
    })

}

exports.findOne = (req,res) =>{
    // console.log(req.params)
    Product.findById(req.params.productId)
        .then(note=>{
            if(!note) {
                return res.status(404).send({
                    message: 'Product not found with the id'
                })
            }
            res.send(note)
        })

    // Product.find({})
}

exports.update = (req,res) =>{

}

exports.delete = (req,res)=>{

}
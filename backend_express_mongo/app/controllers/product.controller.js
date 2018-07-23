const Product = require('../models/product.model')
const fs = require('fs')
exports.create = (req,res) =>{
 var myData = new Product(req.body)
    myData.image.data=fs.readFileSync(req.file.path)
    myData.image.contentType='image/jpg'
    myData.save()
        .then(item=>res.send('Product Saved'+item))
        .catch(err=>{res.status(400).send('Unable to save to database'+err)})

}

exports.findAll = (req,res) =>{
    Product.find().then(product=>{
        res.send(product)
    })
}

exports.findOne = (req,res) =>{

}

exports.update = (req,res) =>{

}

exports.delete = (req,res)=>{

}
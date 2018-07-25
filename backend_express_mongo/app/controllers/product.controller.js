const Product = require('../models/product.model')
const fs = require('fs')
exports.create = (req,res) =>{
    let arr = Object.assign(req.files)
    arr = arr.map(x=>x.filename)
    var myData = new Product(req.body)
    // var img = fs.readFileSync(req.file.path)
    // myData.image.data=img
    // myData.image.contentType='image/jpg'
    myData.imageUrls=arr
    console.log(myData)
    myData.save()
        .then(item=>res.send('Product Saved'+item))
        .catch(err=>{res.status(400).send('Unable to save to database'+err)})

}

exports.findAll = (req,res) =>{
    Product.find({}).then(product=>{
        res.send(product)
    })

}

exports.findOne = (req,res) =>{

}

exports.update = (req,res) =>{

}

exports.delete = (req,res)=>{

}
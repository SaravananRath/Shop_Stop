const Product = require('../models/product.model')
const fs = require('fs')
exports.create = (req,res) =>{
    console.log(req.body)
 // var myData = new Product(req.body)
 //    var img = fs.readFileSync(req.file.path)
 //    myData.image.data=img
 //    myData.image.contentType='image/jpg'
 //    myData.imageUrl=req.file.filename
 //    myData.save()
 //        .then(item=>res.send('Product Saved'+item))
 //        .catch(err=>{res.status(400).send('Unable to save to database'+err)})

}

exports.findAll = (req,res) =>{
    Product.find({productCategory:'Men'}).then(product=>{
        console.log(product[0].imageUrl)
        // res.setHeader('content-type',product[0].image.contentType)

        // res.send(product.image.data.buffer)
        // res.send(product[0].image.data)
        //  res.send(product[0].imageUrl)s
        // res.setHeader('content-type','image/jpeg')
        res.send(product[0].imageUrl)
    })

}

exports.findOne = (req,res) =>{

}

exports.update = (req,res) =>{

}

exports.delete = (req,res)=>{

}
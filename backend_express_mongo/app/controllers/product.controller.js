const Product = require('../models/product.model')

exports.create = (req,res) =>{
 var myData = new Product(req.body)
    myData.save()
        .then(item=>res.send('Product Saved'+item))
        .catch(err=>{res.status(400).send('Unable to save to database'+err)})
}

exports.findAll = (req,res) =>{

}

exports.findOne = (req,res) =>{

}

exports.update = (req,res) =>{

}

exports.delete = (req,res)=>{

}
const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    productCategory:String,
    productName:String,
    productCount:Number,
    Brand:String,
    description:String,
    productPrice:Number,
    productDiscount:Number,
    review:String,
    image:{data:Buffer,contentType:String},
    imageUrl:String
},{
    timestamps:true
})

module.exports = mongoose.model('Product',ProductSchema)

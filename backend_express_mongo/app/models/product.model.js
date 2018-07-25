const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    productCategory:String,
    productName:String,
    productCount:Number,
    Brand:String,
    description:String,
    productPrice:Number,
    productDiscount:Number,
    reviews:[],
    // image:{data:Buffer,contentType:String},
    imageUrls:[]
},{
    timestamps:true
})

module.exports = mongoose.model('Product',ProductSchema)

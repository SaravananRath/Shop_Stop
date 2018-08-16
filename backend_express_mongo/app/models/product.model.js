const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    productCategory:String,
    productName:String,
    productCount:{type:Number,min:0},
    Brand:String,
    description:String,
    productPrice:Number,
    productDiscount:Number,
    discountedPrice:Number,
    reviews:[],
    imageUrls:[]
},{
    timestamps:true
})

module.exports = mongoose.model('Product',ProductSchema)

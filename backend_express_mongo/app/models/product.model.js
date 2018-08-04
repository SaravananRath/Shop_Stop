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
    // image:{data:Buffer,contentType:String},
    imageUrls:[]
},{
    timestamps:true
})

module.exports = mongoose.model('Product',ProductSchema)

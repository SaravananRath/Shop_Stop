const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    category:String,
    name:String,
    brand:String,
    description:String,
    price:Number,
    discount_percentage:Number,
    reviews:[String],
    count:Number,
    img:{data:Buffer,contentType:String}
},{
    timestamps:true
})

module.exports = mongoose.model('Product',ProductSchema)

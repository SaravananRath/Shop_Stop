const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username:String,
    email:String,
    age:Number,
    password:String,
},{
    timestamps:true
})

 module.exports = mongoose.model('User',UserSchema)
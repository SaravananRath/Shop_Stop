var path = require('path')
var multer = require('multer')
const express = require('express');


module.exports = (app)=> {
    const products = require('../controllers/product.controller.js')
    const users = require('../controllers/user.controller')

    var image = multer.diskStorage({
        destination:(req,file,cb)=>{
          cb(null,__dirname+'/../public/uploads')
        },
        filename:(req,file,cb)=>{
            cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname))
        },
        limits:{fileSize:1000000,files:1}
    })

    var upload = multer({storage:image})
    app.get('/',(req,res)=>{
        // res.sendFile(path.resolve('app/views/index.html'))
        res.render('form')
    })
    app.post('/products',upload.array('image'),products.create)
    app.get('/products',products.findAll)
    app.get('/product/:productId',products.findOne)
    app.get('/products/:cartProducts',products.checkUpdate)
    app.put('/products/:cartProducts',products.update)
    app.delete('/products/:productId',products.delete)
    app.post('/createUser',users.create)

    // console.log(path.resolve('public/uploads'))
    // app.use('/static', express.static(__dirname+'/../public/uploads'))
    // app.use('/static',(req,res)=>{
    //     res.sendFile(path.resolve('app/public/uploads/image-1532425576487.jpg'))
    // })


}
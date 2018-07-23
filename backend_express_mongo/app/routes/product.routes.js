var path = require('path')
var multer = require('multer')

module.exports = (app)=> {
    const products = require('../controllers/product.controller.js')
    var uploadImage = multer({
        dest:__dirname+'../public/uploads',
        limits:{fileSize:1000000,files:1}
    })
    app.get('/',(req,res)=>{
        res.sendFile(path.resolve('app/views/index.html'))
    })
    app.post('/addProduct',products.create)
    app.get('/products',products.findAll)
    app.get('/products/:productId',products.findOne)
    app.put('/products/:productId',products.update)
    app.delete('/products/:productId',products.delete)
}
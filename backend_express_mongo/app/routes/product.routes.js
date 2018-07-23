var path = require('path')
var multer = require('multer')

module.exports = (app)=> {
    const products = require('../controllers/product.controller.js')
    var image = multer({
        dest:__dirname+'/../public/uploads',
        limits:{fileSize:1000000,files:1}
    })
    app.get('/',(req,res)=>{
        res.sendFile(path.resolve('app/views/index.html'))
    })
    app.post('/products',image.single('image'),products.create)
    app.get('/products',products.findAll)
    app.get('/products/:productId',products.findOne)
    app.put('/products/:productId',products.update)
    app.delete('/products/:productId',products.delete)
    app.get('/image',(req, res) => {
        res.sendFile(path.join(__dirname, "../public/uploads/5750cc8b21ed8833be2ff8c46ac0b65e"));
    });
}
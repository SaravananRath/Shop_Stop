const User = require('../models/user.model')


exports.create = (req,res) => {
    var userData = new User(req.body)
        userData.save()
            .then(user=>{res.send('User Created'),user})
            .catch(err=>{res.status(400).send('Unable to create user'),err})
}
const mongoose = require('mongoose')

const CookiesSchema = new mongoose.Schema({
    name: {type:String,required:true},
    packs: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:String,required:true},
    image: {type:String,required:true}
})

const Cookies = mongoose.model('Cookies',CookiesSchema)

module.exports = Cookies;
const mongoose = require('mongoose')

const PastriesSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:String,required:true},
    image: {type:String,required:true}
})

const Pastries = mongoose.model('Pastries',PastriesSchema)

module.exports = Pastries;
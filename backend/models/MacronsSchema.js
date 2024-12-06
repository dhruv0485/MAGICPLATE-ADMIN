const mongoose = require('mongoose')

const MacronsSchema = new mongoose.Schema({
    name: {type:String,required:true},
    packs: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:String,required:true},
    image: {type:String,required:true}
})

const Macrons = mongoose.model('Macrons',MacronsSchema)

module.exports = Macrons;
const mongoose = require('mongoose');

const DonutsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    packs: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true }
});

const Donuts = mongoose.model('Donuts', DonutsSchema);

module.exports = Donuts;

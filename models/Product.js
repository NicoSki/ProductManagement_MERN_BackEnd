const mongoose = require('mongoose');
const { appConfig } = require('../config');
const Schema = mongoose.Schema;

const productSchema = Schema({
    name: String,
    size: Number,
    priceUnitary: Number,
    imgUrl: String,
    description: String,
    category: String
}, {
    //*esto es para saber cuando se creo/actualizo
    timestamps: true
});


module.exports = mongoose.model('Products', productSchema);

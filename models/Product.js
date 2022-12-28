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

productSchema.methods.setImgUrl = function setImgUrl(filename) {
    const { host, port } = appConfig
    //*uso el this ya que hacer referencia a productSchema(y puedo modificar sus propiedades;name,size,etc)
    this.imgUrl = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model('Products', productSchema);
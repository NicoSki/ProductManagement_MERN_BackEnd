const express = require('express');
const upload = require('../libs/storage');
const productRouter = express.Router();

const { addProduct, getProducts, deleteProduct, productCategory } = require('../controllers/productController');

productRouter.get('/products',getProducts);
productRouter.get('/products/:category',productCategory);
productRouter.post('/products',upload.single('imgUrl'),addProduct);
productRouter.delete('/deleteProduct/:id',deleteProduct);


module.exports = productRouter;
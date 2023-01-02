const express = require('express');
const productRouter = express.Router();

const { addProduct, getProducts, deleteProduct, productCategory } = require('../controllers/productController');

productRouter.get('/products',getProducts);
productRouter.get('/products/:category',productCategory);
productRouter.post('/products',addProduct);
productRouter.delete('/deleteProduct/:id',deleteProduct);


module.exports = productRouter;

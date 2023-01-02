const Product = require('../models/Product');



async function addProduct(req, res) {
    try {
        const {
            name,
            size,
            priceUnitary,
            imgUrl,
            description,
            category
        } = req.body

        const newProduct = Product({
            name,
            size,
            priceUnitary,
            imgUrl,
            description,
            category
        });

        await newProduct.save();
        res.json({ Product: newProduct });
    } catch (error) {
        console.log(error);
    }
}

async function getProducts(req, res) {
    try {
        const products = await Product.find().lean().exec();
        
        res.status(200).send({ products });
    } catch (error) {
        console.log(error);
    }
}

async function deleteProduct(req, res) {
    try {
        const prodID = req.params.id;
        const delProd = await Product.findByIdAndRemove( prodID );
        res.status(200).send({ delProd });
    } catch (error) {
        console.log(error);
    }
}



async function productCategory(req, res) {
    try {
        const prodCat = req.params.category;

        const categ = await Product.find({ 'category': prodCat });

        res.status(200).json({ categ });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addProduct,
    getProducts,
    deleteProduct,
    productCategory
}

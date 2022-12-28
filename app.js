const express = require('express');

const productRouter = require('./routes/product');

const cors = require('cors');

const app = express();

app.use(cors());

//*MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static(`${__dirname}/storage/imgs`));

app.use('/mern', productRouter);

module.exports = app;
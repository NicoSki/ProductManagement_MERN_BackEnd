const mongoose = require('mongoose');

//*PARA CORROBORAR DE LA EXITOSA CONEXION
mongoose.connection.on('open', () => console.log('Success Connection to mongoBD'));

async function connectDB({ host, port, dbName }) {
    const uri = `mongodb://${host}:${port}/${dbName}`
    await mongoose.connect(uri, { useNewUrlParser: true })
}

module.exports = connectDB;
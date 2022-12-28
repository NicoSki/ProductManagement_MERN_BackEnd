const mongoose = require('mongoose');

//*PARA CORROBORAR DE LA EXITOSA CONEXION
mongoose.connection.on('open', () => console.log('Success Connection to mongoBD'));

async function connectDB({ host, port, dbName }) {
    const uri = "mongodb://mongo:kkpEJDnHRC8xvsRngXf9@containers-us-west-44.railway.app:7985"
    await mongoose.connect(uri, { useNewUrlParser: true })
}

module.exports = connectDB;

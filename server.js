require('dotenv').config();
const app = require('./app');
const { appConfig, dbConfig } = require('./config');
const connectDB = require('./db/mongo');



//*FUNCION PARA MANEJO DE ERRORES EN CONEXION A MONGODB
async function initApp(appConfig, dbConfig) {
    try {
        //*CONEXION CON MONGODB
        await connectDB(dbConfig);
        app.listen(appConfig.port, () => {
            console.log(`Server listening on http://localhost:${appConfig.port}`);
        })
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
}

initApp(appConfig, dbConfig);
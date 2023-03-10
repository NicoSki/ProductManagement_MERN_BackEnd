const config = {
    appConfig: {
        host:process.env.HOST,
        port: process.env.PORT
    },
    dbConfig: {
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        dbName: process.env.DB_NAME
    }
}

module.exports = config
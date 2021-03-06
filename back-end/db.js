// Set up mongoose connection
const mongoose = require('mongoose');

let DB_USER = process.env.DB_USER;
let DB_PASSWORD = process.env.DB_PASSWORD;
let DB_HOST = process.env.DB_HOST;
let DB_PORT = process.env.DB_PORT;
let DB_NAME = process.env.DB_NAME;
let DB_COLLECTION_NAME = process.env.DB_COLLECTION_NAME;

let dbUrl = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

console.log(`Connecting to: ${dbUrl}`);

let mongoDB = process.env.MONGODB_URI || dbUrl;

mongoose.connect(
    mongoDB,
    {
        useNewUrlParser: true,
        reconnectTries: 10,
        connectTimeoutMS: 10000,
        reconnectInterval: 1000
    });
mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
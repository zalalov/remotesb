// Set up mongoose connection
const mongoose = require('mongoose');

let DB_USER = process.env.DB_USER;
let DB_PASSWORD = process.env.DB_PASSWORD;
let DB_HOST = process.env.DB_PASSWORD;
let DB_PORT = process.env.DB_PORT;
let DB_NAME = process.env.DB_NAME;

let dbUrl = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
let mongoDB = process.env.MONGODB_URI || dbUrl;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
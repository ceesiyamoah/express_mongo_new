const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_DB_CONNECTION_URL = process.env.MONGO_DB_CONNECTION_URL;
const connectToMongoDb = () => {
	mongoose.connect(MONGO_DB_CONNECTION_URL);

	mongoose.connection.on('connected', () => {
		console.log('Connection to mongodb successful');
	});

	mongoose.connection.on('error', (err) => {
		console.log(err);
	});
};

module.exports = { connectToMongoDb };

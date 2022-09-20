const express = require('express');
const { connectToMongoDb } = require('./db');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

// Connecting to mongo instance
connectToMongoDb();

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Welcome home');
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

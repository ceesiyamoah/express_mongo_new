const express = require('express');
const { connectToMongoDb } = require('./db');
const bookRoute = require('./routes/book');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

// Connecting to mongo instance
connectToMongoDb();

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Welcome home');
});

app.use('/book', bookRoute);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

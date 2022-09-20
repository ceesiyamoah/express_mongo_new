const express = require('express');
const bookModel = require('../models/book');

const bookRoute = express.Router();

//* Read all
bookRoute.get('/', (req, res) => {
	bookModel
		.find({})
		.then((books) => {
			res.status(200).send(books);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(err.message);
		});
	// res.json(books);
	//return all books
	// res.send('books');
});

//* Read one
bookRoute.get('/:id', (req, res) => {
	const { id } = req.params;
	bookModel
		.findById(id)
		.then((book) => {
			res.status(200).send(book || {});
		})
		.catch((err) => {
			console.log(err);
			res.status(400).send(err.message);
		});
});

//*Add new
bookRoute.post('/', (req, res) => {
	const book = req.body;

	bookModel
		.create(book)
		.then((book) => {
			res.status(201).send({
				message: 'Book added successfully',
				data: book,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(400).send({
				error: err.message,
			});
		});
	//return all books
});

//*Update existing
bookRoute.put('/:id', (req, res) => {
	const { id } = req.params;
	const book = req.body;

	bookModel
		.findByIdAndUpdate(id, book, { new: true })
		.then((book) => {
			res.status(201).send(book);
		})
		.catch((err) => {
			res.status(400).send(err.message);
		});
});

//*Delete
bookRoute.delete('/:id', (req, res) => {
	const { id } = req.params;
	bookModel
		.findByIdAndDelete(id)
		.then(() => {
			res.status(200).send({ message: 'Book deleted successfully' });
		})
		.catch((err) => {
			console.log(err);
			res.status(400).send(err.message);
		});
});

module.exports = bookRoute;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	year: {
		type: Number,
		required: true,
		max: [new Date().getFullYear(), `Year must be less than or equal to ${new Date().getFullYear()}`],
	},
	isbn: {
		type: String,
		required: true,
		unique: [true, 'ISBN must be unique'],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('books', BookSchema);

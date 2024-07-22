const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true
    },
    auther: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        require: true
    },
    publicationDate: {
        type: Date,
        require: true
    }
});

module.exports = mongoose.model('Book', bookSchema);
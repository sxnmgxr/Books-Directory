const express = require('express');
const Book = require('../models/product.book');
const router = express.Router();

// add a new book
router.post('/', async (req, res) => {
    const { title, author, genre, publicationDate } = req.body;
    const newBook = new Book({ title, author, genre, publicationDate });

    try {
        await newBook.save();
        res.status(201).json(newBook);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

//get a single book by ID
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//update a book by ID
router.put('/:id', async (req, res) => {
    try {
        const { title, author, genre, publicationDate } = req.body;
        const book = await Book.findByIdAndUpdate(req.params.id,
            { title, author, genre, publicationDate }, { new: true });
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//delete a book by ID
router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findOneAndDelete(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json({ message: 'book deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
});

module.exports = router;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/routes.book');

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(bodyParser.json());
app.use('/api/books', bookRoutes);

//connect to MongoDB

mongoose.connect('mongodb+srv://booktest123:booktest123@books-directory.nyulst8.mongodb.net/bookStore?retryWrites=true&w=majority&appName=Books-Directory', {
}).then(() => {
    console.log('connected to MongoDB');
}).catch(err => {
    console.error('Database connection error:', err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
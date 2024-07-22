# Book Directory

A simple Node.js application for managing a directory of books. This application provides a RESTful API for creating, reading, updating, and deleting books in a MongoDB database.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- Add a new book to the directory
- Retrieve a list of all books
- Retrieve details of a specific book by ID
- Update the details of a book by ID
- Delete a book by ID

## Requirements

- Node.js
- npm
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/book-directory.git
   cd book-directory
2. Install the dependencies:
   npm install

3. Ensure MongoDB is running on your local machine or provide a MongoDB URL in your environment       
   variables.

4. Start the application:
   npm start
   The server will start on `http://localhost:3000`.

## Usage
You can interact with the API using tools like Postman or curl.
   - Add a New Book
     POST /api/books
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic",
  "publicationDate": "1925-04-10"
}

6. Get All Books
   GET /api/books

7. Get a Book by ID
   GET /api/books/{id}

8. Update a book by ID
   ```bash
   PUT /api/books/{id}
Content-Type: application/json

{
  "title": "The Great Gatsby (Updated)",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic",
  "publicationDate": "1925-04-10"
}

9. Delete a book by ID
    DELETE /api/books/{id}

   API Endpoints

   -> POST /api/books: Add a new book
   -> GET /api/books: Retrieve all books
   -> GET /api/books/:id: Retrieve a specific book by ID
   -> PUT /api/books/:id: Update a specific book by ID
   -> DELETE /api/books/:id: Delete a specific book by ID

   
   

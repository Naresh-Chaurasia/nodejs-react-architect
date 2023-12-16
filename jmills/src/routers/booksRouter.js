const express = require('express');
const books_json = require('../data/books.json');

const booksRouter = express.Router();

booksRouter.route('/').get((req, res) => {
  res.render('books', {
    books_json,
  });
});

booksRouter.route('/:id').get((req, res) => {
  const id = req.params.id;
  
  //display without page.
  //res.send('hello book'+id)
  
  res.render('book',{
    book:books_json[id],
  });

});

module.exports = booksRouter;
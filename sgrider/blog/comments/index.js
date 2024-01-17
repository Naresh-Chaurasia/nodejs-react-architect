const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

// const commentsByPostId = {}; 
// Creating an empty object to store comments, using post IDs as keys

// const { content } = req.body; 
// Destructuring the 'content' property from the 'req.body' object

// Retrieving comments associated with a particular post ID or 
// initializing an empty array if no comments exist
// const comments = commentsByPostId[req.params.id] || [];

// // Adding a new comment to the 'comments' array
// comments.push({ id: commentId, content });

// Storing the updated 'comments' array back into 
// the 'commentsByPostId' object using the post ID as the key
// commentsByPostId[req.params.id] = comments;

//This is object
const commentsByPostId = {};

app.post('/posts/:id/comments', (req, res) => {
  console.log('----------------');
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];
  console.log('comments1'+comments)
  comments.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comments;
  console.log('commentsByPostId[req.params.id]'+commentsByPostId[req.params.id])
  console.log('comments3'+comments)

  res.status(201).send(comments);
});

app.get('/posts/:id/comments', (req, res) => {
  console.log('commentsByPostId[req.params.id]'+commentsByPostId[req.params.id])
  res.send(commentsByPostId || []);
});

app.listen(4001, () => {
  console.log('Listening on 4001');
});

const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

//This is object
const commentsByPostId = {};

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];
  console.log('comments1'+comments)
  comments.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comments;
  console.log('comments3'+comments)

  res.status(201).send(comments);
});

app.get('/posts/:id/comments', (req, res) => {
  console.log('commentsByPostId[req.params.id]'+commentsByPostId[req.params.id])
  res.send(commentsByPostId[req.params.id] || []);
});

app.listen(4001, () => {
  console.log('Listening on 4001');
});

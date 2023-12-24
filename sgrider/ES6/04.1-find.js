var posts = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
  { id: 3, title: 'Post 3' }
];

var comment = { postId: 1, text: 'Comment 1 for Post 1' };

function postForComment(posts, comment){

  return posts.find(function(post){
    return post.id === comment.id;
  });

}

console.log(postForComment(posts, comment));
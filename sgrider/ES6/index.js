// app.js

// Importing the 'http' module
const http = require('http');

var posts = ['a','b','c'];

var num1 = [1,2,3];


// Creating a server using the http module
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and content type
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body as "Hello World"
  res.end('Hello World\n');
});

// Setting the server to listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
  
  
  posts.forEach(function(post){
    console.log(post)
  }

  

  
  );
});

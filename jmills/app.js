const express = require('express');
const chalk = require('chalk');//color the output logs
const debug = require('debug')('app');//only when running in debug mode
const morgan = require('morgan');
const path = require('path');
const sessions = require('./src/data/sessions.json');

const PORT = process.env.PORT || 3000;


const app = express();//instance of express.
const sessionsRouter = require('./src/routers/sessionsRouter');
const adminRouter = require('./src/routers/adminRouter');
const booksRouter = require('./src/routers/booksRouter');

//app.use(morgan('combined'));
app.use(morgan('tiny'));

//where to find static files. index file.
app.use(express.static(path.join(__dirname, '/public/')));

//if index is not available in public, look here.
app.set('views', './src/views');
app.set('view engine', 'ejs'); // Templating Engine

//sessionsRouter is going to hold all the code necessary for /sessions
app.use('/sessions', sessionsRouter);
app.use('/admin', adminRouter);
app.use('/books', booksRouter);

app.get('/', (req, res) => {
  //res.send('Hello from app');
  res.render('index',{title:'I am coming from app.js',data:['a','b','c']});
});


app.listen(PORT, () => {
  //console.log('Listening on port' + chalk.green('3000'));
  debug(`listening on port ${chalk.green(PORT)}`);
});
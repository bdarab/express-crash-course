const express = require('express');
const app = express();

app.set('view engine', 'ejs');
// using middleware 'logger'
app.use(logger);

app.get('/', (req, res) => {
  res.render('index', { text: 'World' });
  // res.download('server.js');
  // res.status(500).send('Hi, There was an Internal Server Error');
});

const userRouter = require('./routes/users');

app.use('/users', userRouter);

// When creating a middleware 'next' argument must be declared
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
// using middleware 'logger'
// app.use(logger);

// using middleware 'static'
app.use(express.static('public'));

// using middleware 'urlencoded'
app.use(express.urlencoded({ extended: true }));

//using middleware 'json'
app.use(express.json())

const userRouter = require('./routes/users');

app.use('/users', userRouter);

app.listen(3000);

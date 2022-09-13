require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/hobbitholedb', {
  useNewUrlParser: true,
});

app.use('/user', require('./routes/user'));

app.listen(PORT, () => {
  console.log(`Сервер запущен на "localhost:${PORT}"`);
});

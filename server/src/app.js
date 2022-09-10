const path = require('path');
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet"); 

const v1 = require('./routes/v1')

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.APP_URL,
  })
);
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..',  'public')));

app.use('/v1', v1);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..',  'public', 'index.html'));
})

module.exports = app;
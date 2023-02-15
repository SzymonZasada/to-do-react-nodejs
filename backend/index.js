const express = require('express');
const app = express();
const config = require('./config');
const cors = require('./cors');
const bodyParser = require('body-parser');
const mock = require('./mock-data');

app.use(function (req, res, next) {
  cors.cors(res);
  next();
});
app.use(express.json());
app.use(bodyParser.json());

app.get('/api/notes', (req, res) => {
  res.send(mock);
});

app.listen(config.port, () => {
  console.log(`Server listening on the port::${config.port}`);
});

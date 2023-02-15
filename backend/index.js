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

app.post('/api/notes', (req, res) => {
  const newNote = {
    id: Date.now(),
    isComplete: false,
    title: req.body.title,
  };
  mock.push(newNote);
  res.send(mock);
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;
  const index = mock.findIndex((el) => el.id === id);
  if (index >= 0) {
    mock[index].isComplete = body.isComplete;
    mock[index].title = body.title;
    res.send(mock);
  }
  if (index == -1) {
    res.sendStatus(404);
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = mock.findIndex((el) => el.id === id);
  if (index >= 0) {
    delete mock[index];
    res.send(mock);
  }
  if (index == -1) {
    res.sendStatus(404);
  }
});

app.listen(config.port, () => {
  console.log(`Server listening on the port::${config.port}`);
});

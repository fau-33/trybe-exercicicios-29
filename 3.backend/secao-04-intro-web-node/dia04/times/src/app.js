const express = require('express');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');
const teamsUtil = require('./utils/teamsUtils');

const app = express();
const apiCredentials = require('./middlewares/apiCredentials');
const teamsUtils = require('./utils/teamsUtils');

let nextId = 3;

app.use(express.json());

app.get('/teams', (req, res) => res.json(teamsUtil));

// usa o middleware
app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teamsUtils.find((t) => t.id === id);
  res.json(team);
});

app.use(apiCredentials);

app.post('/teams', validateTeam, (req, res) => {
  const team = { id: nextId, ...req.body };
  teamsUtils.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teamsUtils.find((t) => t.id === id);

  const index = teamsUtils.indexOf(team);
  const updated = { id, ...req.body };
  teamsUtils.splice(index, 1, updated);
  res.status(201).json(updated);  
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teamsUtils.find((t) => t.id === id);
  const index = teamsUtils.indexOf(team);
  teamsUtils.splice(index, 1);
  res.sendStatus(204);
});

module.exports = app;
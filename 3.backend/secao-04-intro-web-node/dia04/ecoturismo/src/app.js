const express = require('express');
const validateDescription = require('../middlewares/validateDescription');
const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');

const app = express();

module.exports = app;

app.use(express.json());

app.post('/activities', validateDescription, validatePrice, validateName, (_req, res) => {
    res.status(201).json({ message: 'Atividade registrada com sucesso!'});
});

module.exports = app;
const express = require('express');
const validateDifficulty = require('../middlewares/validateDifficulty');
const validateRating = require('../middlewares/validateRating');
const validateCreatedAt = require('../middlewares/validateCreatedAt');
const validateDescription = require('../middlewares/validateDescription');
const validatePrice = require('../middlewares/validatePrice');
const validateName = require('../middlewares/validateName');




const app = express();

module.exports = app;

app.use(express.json());

app.post('/activities', validateDifficulty, validateRating, validateCreatedAt, validateDescription, validatePrice, validateName, (_req, res) => {
    res.status(201).json({ message: 'Atividade registrada com sucesso!'});
});

module.exports = app;
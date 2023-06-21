module.exports = (req, res, next) => {
    const { difficulty } = req.body.description;
    const classifications = ['Fácil', 'Médio', 'Dificil'];

    if (!classifications.includes(difficulty)) {
        return res.status(400).json(
            { message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' },
          );
    }

    next();
};
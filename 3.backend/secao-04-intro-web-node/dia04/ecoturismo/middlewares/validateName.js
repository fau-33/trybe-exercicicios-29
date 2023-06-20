module.exports = (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json(
            { message: 'O campo não é obrigat[orio'},
        );
    }

    if (name.length > 4) {
        return res.status(400).json(
            { message: 'O campo name deve ter pelo menos 4 caracteres'},
        );
    }

    next();
};
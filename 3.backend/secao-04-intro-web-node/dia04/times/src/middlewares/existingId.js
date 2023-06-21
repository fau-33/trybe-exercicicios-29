const teamsUtils = require('../utils/teamsUtils');

const existingId = (req, res, next) => {
    const id = Number(req.params.id);
  
    if (!teamsUtils.some((t) => t.id === id)) {
         return res.sendStatus(404).json({ message: 'Time não encontrado' }); 
    }
    next();
  };

module.exports = existingId;  
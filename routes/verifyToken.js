const jwt = require('jsonwebtoken');

function auth(req,res,next) {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({message: 'Accesso denegado'})
    }
    next();
    try {
        const verified = jwt.verify(token, process.env.TOKEN);
        req.user = verified;
    } catch (error) {
        res.status(401).json({message: 'Accesso denegado, token invalido'})
    }
}

module.exports = auth;
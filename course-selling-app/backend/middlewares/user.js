const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
function userMiddlewares(req, res, next) {
    const token = req.header.token;
    const decoded = jwt.verify(token, JWT_USER_PASSWORD);
    
    if (decoded) {
        req.userId = decoded.Id;
        next();
    }
    else {
        res.status(403).json({
            message: "Unauthorized"
        })
    }
}

module.exports = userMiddlewares;
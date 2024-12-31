const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
function adminiddlewares(req, res, next) {
    const token = req.header.token;
    const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);
    
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

module.exports = adminMiddlewares;
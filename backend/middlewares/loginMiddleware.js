const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')

function loginMiddleware(req, res, next) {
    const token = req.headers.authorization
    try {
        const isValid = jwt.verify(token, JWT_SECRET)
        req.username = isValid.username
        next()
    } catch (error) {
        res.status(403).json("You are not authorized")
        return
    }
}

module.exports = {
    loginMiddleware
}
const jwt = require('jsonwebtoken')
const util = require('util')
const signTokenPromiseBased = util.promisify(jwt.sign)
const verifyTokenPromiseBased = util.promisify(jwt.verify)
const secret = process.env.JWT_SECRET;

const generateToken = (id) => {
    return signTokenPromiseBased({ id: id }, secret)
}

const verifyToken = (token) => {
    return verifyTokenPromiseBased(token, secret)
}

module.exports = {
    generateToken,
    verifyToken
}
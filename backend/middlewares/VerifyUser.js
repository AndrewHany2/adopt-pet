const { verifyToken } = require('../helpers/Token')
const verifyUser = async (req, res, next) => {
    
    const { authorization } = req.headers
    try{
        if (authorization) {
            const payload = await verifyToken(authorization)
            if (payload.id) {
                req.verified = payload.id;
                return next()
            }
        }
        return next (new Error('not authorized'))
    }
    catch(err){
        return next(new Error('not authorized'))   
    }
}

module.exports = verifyUser;
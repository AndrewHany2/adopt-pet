const { verifyToken } = require('../helpers/Token')
const verifyUser = async (req, res, next) => {
    
    const { authorization } = req.headers
    try{
        debugger
        if (authorization) {
            const payload = await verifyToken(authorization)
            if (payload.id) {
                req.verified = payload.id;
                console.log(payload)
                next()
                return
            }
        }
        next (new Error('not authorized'))
    }
    catch(err){
        next(new Error('not authorized'))   
    }
}

module.exports = verifyUser;
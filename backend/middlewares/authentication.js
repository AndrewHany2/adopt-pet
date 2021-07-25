const User = require("../models/UserModel");

const authenticationRole = role => {
    return async (req, res, next) => {
        try{
            const user = await User.findOne({_id: req.verified})
            console.log(req.verified);
            console.log(user);
            console.log(role);
            console.log(user.role);
            if (user.role != role) {
                res.status(401);
                return res.send('Not Allowed');
            }
            next();
        }
        catch(err){ return next(new Error('Server Error - 500')) };
    }
}

module.exports = authenticationRole;
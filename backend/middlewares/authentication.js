const User = require("../models/UserModel");

const authenticationRole = (role) => {
    return async (req, res, next) => {
        try {
            const user = await User.findOne({ _id: req.verified })
            if (user.role != role) {
                res.status(401);
                return res.send('Not Allowed');
            }
            next();
        }
        catch (err) { return next(new Error('Server Error - 500')) };
    }
}
const authenticationAdmin = () => {
    return async (req, res, next) => {
        try {
            const user = await User.findOne({ _id: req.verified })
            if (user.role !== "SUPER_ADMIN" && user.role !== "ADMIN") {
                res.status(401);
                return res.send('Not Allowed');
            }
            next();
        }
        catch (err) { return next(new Error('Server Error - 500')) };
    }
}

module.exports = { authenticationRole, authenticationAdmin };
const User = require("../models/UserModel");
const Token = require("../models/ResetPasswordToken");
const sendEmail = require("../helpers/sendEmail");
const { generateToken } = require("../helpers/Token");
const express = require("express");
const resetPasswordRouter = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;



resetPasswordRouter.post("/", async (req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res.status(400).send("user with given email doesn't exist");

        let token = await Token.findOne({ userId: user._id });
        if (!token) {
            const myToken = await generateToken(user._id);
            token = await new Token({
                userId: user._id,
                token: myToken,
            }).save();
        }

        const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
        await sendEmail(user.email, link);

        res.send("password reset link sent to your email account");
    } catch (error) {
        res.status(500).json({message:error});
        console.log(error);
    }
});

resetPasswordRouter.post("/:userId/:token", async (req, res) => {
    try {

        const user = await User.findById(req.params.userId);
        if (!user) return res.status(400).send("invalid link or expired");

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        });
        if (!token) return res.status(400).send("Invalid link or expired");
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;
        user.password = req.body.password;
        await user.save();
        await token.delete();

        res.send("password reset sucessfully.");
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
});

module.exports = resetPasswordRouter;
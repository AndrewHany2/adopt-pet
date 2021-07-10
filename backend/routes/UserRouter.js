const userRouter = require("express").Router();
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { generateToken } = require("../helpers/Token");
const verifyUser = require("../middlewares/VerifyUser");

userRouter.post("/login", async (req, res, next) => {
  const { body } = req;
  try {
    if (body.email && body.password) {
      const user = await User.findOne({ email: body.email });
      if (user) {
        const match = await bcrypt.compare(body.password, user.password);
        if (match) {
          const token = await generateToken(user._id);
          res.status(200).json({ token });
        } else {
          res.status(400).json({ status: "password invalid" });
        }
      } else {
        res.status(404).json({ status: "user invalid" });
      }
    }
  } catch (error) {
    next(new Error("server error"));
  }
});

userRouter.post("/register", async (req, res) => {
  const { body } = req;
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(body.password, salt);
    body.password = hashedPassword;

    const user = new User({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      age: body.age,
      password: body.password,
    });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

userRouter.get("/profile/:username", verifyUser, async (req, res) => {
  debugger;
  const { username } = req.params;
  if (req.verified) {
    const user = await User.findOne({ _id: req.verified });
    res.status(200).json(user);
    // console.log(payload)
  }
});

userRouter.delete("/delete/:id", verifyUser, async (req, res) => {
  debugger;
  try {
    if (req.verified) {
      const user = await User.deleteOne({ _id: req.verified });
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
userRouter.get("/:id",verifyUser, async (req, res) => {
  debugger;
  try {
    console.log(req.params.id)
    if (req.verified) {
      const user = await User.findOne({ _id: req.verified });
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

userRouter.get("/", async ({ query }, res) => {
  debugger
  try {
    users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = userRouter;

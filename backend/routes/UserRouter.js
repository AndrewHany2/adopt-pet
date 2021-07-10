const userRouter = require("express").Router();
const User = require("../models/UserModel");

userRouter.post("/", async (req, res) => {
  const { body } = req;
  try {
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
userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ _id: id });
  res.status(200).json(user);
});

userRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.deleteOne({ _id: id });
  res.status(200).json(user);
});

userRouter.get("/", async ({ query }, res) => {
  try {
    users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = userRouter;

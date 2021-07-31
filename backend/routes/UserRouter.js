const userRouter = require("express").Router();
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { generateToken } = require("../helpers/Token");
const verifyUser = require("../middlewares/VerifyUser");
const passport = require("passport");
const facebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const upload = require("../helpers/multer");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(
  "250957011123-idjuenirgj99td96d8fl8ttdgq9ejskt.apps.googleusercontent.com"
);

userRouter.post("/login", async (req, res, next) => {
  const { body } = req;
  try {
    if (body.email && body.password) {
      const user = await User.findOne({ email: body.email });
      if (user) {
        if (body.password) {
          const match = await bcrypt.compare(body.password, user.password);
        } else {
          return res.status(400).json({ message: "password invalid" });
        }
        if (match) {
          const token = await generateToken(user._id);
          res.status(200).json({
            token: token,
            userId: user._id,
            userRole: user.role,
            petAdoptionRequests: user.petAdoptionRequests,
          });
        } else {
          return res.status(400).json({ message: "password invalid" });
        }
      } else {
        return res.status(404).json({ message: "user invalid" });
      }
    }
  } catch (error) {
    return next(new Error("server error"));
  }
});

userRouter.post("/register", async (req, res) => {
  const { body } = req;
  try {
    existingUser = await User.findOne({ email: body.email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    } else {
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(body.password, salt);
      body.password = hashedPassword;
      const user = new User({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        age: body.age,
        password: body.password,
        country: body.country,
        city: body.city,
        phone: body.phone,
      });
      const savedUser = await user.save();
      return res.status(201).json(savedUser);
    }
  } catch (err) {
    return res.status(400).json(err);
  }
});

userRouter.delete("/delete/:id", verifyUser, async (req, res) => {
  try {
    if (req.verified) {
      const user = await User.deleteOne({ _id: req.verified });
      return res.status(200).json(user);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});
userRouter.get("/profile/:id", verifyUser, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
});

userRouter.get("/", verifyUser, async ({ query }, res) => {
  try {
    if (query.email) {
      const user = await User.findOne({ email: query.email });
      return res.status(200).json(user);
    } else {
      const user = await User.find({});
      return res.status(200).json(user);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

userRouter.delete("/", async (req, res) => {
  try {
    const user = await User.deleteMany({});
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
});
// userRouter.patch("/", async (req, res) => {
//   try {
//       const user = await User.updateMany({role:"ADMIN"});
//       return res.status(200).json(user);
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// });

userRouter.get("/:id", verifyUser, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

userRouter.put("/:id", upload, verifyUser, async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });
    const firstName = req.body.firstName || user.firstName;
    const lastName = req.body.lastName || user.lastName;
    const email = req.body.email || user.email;
    const country = req.body.country || user.country;
    const phone = req.body.phone || user.phone;
    const city = req.body.city || user.city;
    let image = user.image;
    if (req.file) {
      image = `/images/${req.file.filename}`;
    }
    existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      user.email = email;
    } else {
      res.status(400).json({ message: "Email Alraedy Exists" });
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.country = country;
    user.phone = phone;
    user.city = city;
    user.country = country;
    user.phone = phone;
    user.image = image;

    req.body.postedPets
      ? user.postedPets.push(req.body.postedPets)
      : user.postedPets;
    req.body.adoptionRequests
      ? user.adoptionRequests.push(req.body.adoptionRequests)
      : user.adoptionRequests;

    const response = await user.save();
    if (response) {
      res.status(200).json({ response: response });
    }
  } catch (e) {
    next(e);
    return res.status(500).json(error);
  }
});

userRouter.post("/googlelogin", async (req, res) => {
  const { tokenId } = req.body;

  const { payload } = await client.verifyIdToken({
    idToken: tokenId,
    audience:
      "250957011123-idjuenirgj99td96d8fl8ttdgq9ejskt.apps.googleusercontent.com",
  });
  const { given_name, email, picture, family_name } = payload;

  const user = await User.findOne({ email });

  if (user) {
    const token = await generateToken(user._id);
    res.status(200).json({
      token: token,
      userId: user._id,
      userRole: user.role,
      petAdoptionRequests: user.petAdoptionRequests,
    });
  } else {
    const user = new User({
      firstName: given_name,
      lastName: family_name,
      email: email,
    });
    const savedUser = await user.save((err, data) => {
      console.log(data)
      if (err) {
        res.status(500).json({ message: "Something went wrong" });
      } 
    });
    console.log(savedUser.data)
    return res.status(201).json(savedUser);
  }
});

module.exports = userRouter;

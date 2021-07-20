const userRouter = require("express").Router();
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { generateToken } = require("../helpers/Token");
const verifyUser = require("../middlewares/VerifyUser");
const passport = require("passport");
const facebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth2").Strategy;

userRouter.use(passport.initialize());
userRouter.use(passport.session());

userRouter.use(passport.initialize());
userRouter.use(passport.session());

passport.use(
  new facebookStrategy(
    {
      clientID: 5060833230611081,
      clientSecret: "f3b7e15e534b0b4dc686b954c355b1a7",
      callbackURL: "http://localhost:8000/api/user/login/facebook/callback",
      profileFields: ["id", "displayName", "email", "first_name", "last_name"],
    },

    function (accessToken, refreshToken, profile, done) {
      // console.log(profile)
      //Check the DB to find a User with the profile.id
      User.findOne(
        {
          facebookId: profile.id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
        },
        function (err, user) {
          //See if a User already exists with the Facebook ID
          if (err) {
            console.log(err); // handle errors!
          }

          if (user) {
            // console.log(user);
            done(null, user); //If User already exists login as stated on line 10 return User
          } else {
            //else create a new User
            user = new User({
              facebookId: profile.id,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName, //pass in the id and displayName params from Facebook
            });
            user.save(function (err) {
              //Save User if there are no errors else redirect to login route
              if (err) {
                console.log(err); // handle errors!
              } else {
                console.log("saving user ...");
                done(null, user);
              }
            });
          }
        }
      );
    }
  )
);

userRouter.get("/login/facebook", passport.authenticate("facebook"));

userRouter.get(
  "/login/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/signin",
  })
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "714325331151-ae7jueb7a25q79nc13h346u35f2pk00p.apps.googleusercontent.com",
      clientSecret: "YIQQAK4ZokbI10Q1lqOgHpeu",
      callbackURL: "http://localhost:8000/api/user/login/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      console.log(profile);
      return done(null, profile);
    }
  )
);

userRouter.get(
  "/login/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

userRouter.get(
  "/login/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/signin",
  }),
  function (req, res) {
    res.redirect("http://localhost:3000/");
  }
);

userRouter.post("/login", async (req, res, next) => {
  const { body } = req;
  try {
    if (body.email && body.password) {
      const user = await User.findOne({ email: body.email });
      if (user) {
        const match = await bcrypt.compare(body.password, user.password);
        if (match) {
          const token = await generateToken(user._id);
          res.status(200).json({ token, userId: user._id });
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
      return res.status(400).json({ status: "Email already exists" });
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
    console.log(req.params.id);
    if (req.verified) {
      const user = await User.findOne({ _id: req.verified });
      return res.status(200).json(user);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

userRouter.get("/", async ({ query }, res) => {
  try {
    users = await User.find({});
    return res.status(200).json(users);
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

module.exports = userRouter;

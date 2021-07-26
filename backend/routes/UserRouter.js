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

    async function (accessToken, refreshToken, profile, done) {
      //Check the DB to find a User with the profile.id
      const user = await User.findOne(
        {
          facebookId: profile.id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
        },
        async function (err, user) {
          //See if a User already exists with the Facebook ID
          if (err) {
            console.log(err); // handle errors!
          }

          if (user) {
            const token = await generateToken(user._id);
            let myUser = {
              facebookId: profile.id,
              token: token,
              userId: user._id,
              userRole: user.role,
              petAdoptionRequests: user.petAdoptionRequests,
            };
            console.log(myUser);
            done(null, myUser); //If User already exists login as stated on line 10 return User
          } else {
            //else create a new User
            user = await new User({
              facebookId: profile.id,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName, //pass in the id and displayName params from Facebook
            });
            await user.save(async function (err) {
              //Save User if there are no errors else redirect to login route
              if (err) {
                console.log(err); // handle errors!
              } else {
                const user = await User.findOne({
                  facebookId: profile.id,
                  firstName: profile.name.givenName,
                  lastName: profile.name.familyName,
                });
                const token = await generateToken(user._id);
                myUser = {
                  facebookId: profile.id,
                  token: token,
                  userId: user._id,
                  userRole: user.role,
                  petAdoptionRequests: user.petAdoptionRequests,
                };
                console.log("saving user ...");
                done(null, myUser);
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
        "714325331151-am2l8ga5p9kjh647rjaqf9lnhma5bg0g.apps.googleusercontent.com",
      clientSecret: "TfI-HWOiXh4LFYG1bU4xm-Bc",
      callbackURL: "/login/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      //get the user data from google
      const newUser = {
        googleId: profile.id,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
      };

      try {
        //find the user in our database
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
          //If user present in our database.
          done(null, user);
        } else {
          // if user is not preset in our database save user data to database.
          user = await User.create(newUser);
          done(null, user);
        }
      } catch (err) {
        console.error(err);
      }
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

// Used to stuff a piece of information into a cookie
passport.serializeUser((user, done) => {
  done(null, user);
});

// Used to decode the received cookie and persist session
passport.deserializeUser((user, done) => {
  done(null, user);
});

userRouter.post("/login", async (req, res, next) => {
  const { body } = req;
  try {
    if (body.email && body.password) {
      const user = await User.findOne({ email: body.email });
      if (user) {
        const match = await bcrypt.compare(body.password, user.password);
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
      console.log(req.body);
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
userRouter.get("/profile/:id",verifyUser, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
});

userRouter.get("/",verifyUser, async ({ query }, res) => {
  try{
  if (query.email) {
    const user = await User.findOne({ email: query.email });
    return  res.status(200).json(user);
  } else {
    const user = await User.find({});
    return res.status(200).json(user);
  }
} catch (err) {
  return res.status(500).json(err);
}});

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

userRouter.get("/:id",verifyUser, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

userRouter.put("/:id",upload ,async (req, res, next) => {
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
    if(req.file){
       image = `/images/${req.file.filename}`;
    }


    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
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

module.exports = userRouter;

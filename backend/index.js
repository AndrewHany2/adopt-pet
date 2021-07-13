require("dotenv").config();
const db = require("./helpers/dbConnection");
const petRouter = require("./routes/petRouter");
const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/UserRouter");
const app = express();
const passport = require('passport');
const facebookStrategy = require("passport-facebook").Strategy;
app.use(passport.initialize());
app.use(passport.session());
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
facebookId:String
});

const UserFB = mongoose.model('UserFB',userSchema);
db.connectDB();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = require("path");
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use("/api/user", userRouter);

app.use("/api/pets", petRouter);
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: err });
});


passport.use(new facebookStrategy({
    clientID: 5060833230611081,
    clientSecret: "f3b7e15e534b0b4dc686b954c355b1a7",
    callbackURL: "http://localhost:8000/auth/facebook/callback"
  },
 
function(accessToken, refreshToken, profile, done) {
      console.log(profile)
  //Check the DB to find a User with the profile.id
  UserFB.findOne({ facebookId: profile.id }, function(err, user) {//See if a User already exists with the Facebook ID
    if(err) {
      console.log(err);  // handle errors!
    }
    
    if (user) {
      console.log(user);
      done(null, user); //If User already exists login as stated on line 10 return User
    } else { //else create a new User
      user = new UserFB({
        facebookId: profile.id, //pass in the id and displayName params from Facebook
      });
      user.save(function(err) { //Save User if there are no errors else redirect to login route
        if(err) {
          console.log(err);  // handle errors!
        } else {
          console.log("saving user ...");
          done(null, user);
        }
      });
    }
  });
}
));

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: 'http://localhost:3000/',
                                      failureRedirect: 'http://localhost:3000/signin' }));


                                      passport.serializeUser(function(user, cb) {
                                        cb(null, user);
                                    });
                                    passport.deserializeUser(function(obj, cb) {
                                       cb(null, obj);
                                    });                                      

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

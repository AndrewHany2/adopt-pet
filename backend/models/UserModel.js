const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER",
  },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER",
  },
  postedPets: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  adoptionRequests: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  petAdoptionRequests: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  facebookId: {
    type: String,
  },
  googleId: {
    type: String,
  },
  country: {
    type: String,
  },
  city: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;

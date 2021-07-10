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
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  postedPets: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  adoptionRequests: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
});

const User = mongoose.model('User',userSchema);
module.exports = User;

const mongoose = require("mongoose");
const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  neutered: {
    type: String,
  },
  age: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;

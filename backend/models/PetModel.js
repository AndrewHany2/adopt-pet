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
  vaccinated:{
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  size:{
    type:String,
    require:true,
  },
  description:{
    type:String,
    require:true
  },
  image: {
    type: String,
    required: true,
  },
});
const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;

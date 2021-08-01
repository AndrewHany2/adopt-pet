const mongoose = require("mongoose");
const contactUsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "UNREAD",
    required: true,
    enum: ['READ', 'UNREAD']
  }
});
const ContactUs = mongoose.model("ContactUS", contactUsSchema);

module.exports = ContactUs;
const contactUsRouter = require("express").Router();
const ContactUs = require("../models/UserContactMassage");
contactUsRouter.post("/",(req, res) => {
    const contact = new ContactUs({
      name: req.body.name,
      email: req.body.email,
      subject:req.body.subject,
      message:req.body.message, 
    });
    contact
      .save()
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
module.exports = contactUsRouter;
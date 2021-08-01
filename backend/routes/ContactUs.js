const contactUsRouter = require("express").Router();
const ContactUs = require("../models/UserContactMassage");

const { authenticationAdmin } = require('../middlewares/authentication');
const verifyUser = require("../middlewares/VerifyUser");

contactUsRouter.post("/", (req, res) => {
  const contact = new ContactUs({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  });
  contact
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

contactUsRouter.get("/", verifyUser, authenticationAdmin(), async (req, res) => {
  try {
    let messages;

    let status = req.query.status;
    switch (status) {
      case 'UNREAD':
        messages = await ContactUs.find({ status: 'UNREAD' }).sort({ _id: -1 });
        break;
      case 'READ':
        messages = await ContactUs.find({ status: 'READ' });
        break;
      default:
        messages = await ContactUs.find({});
    }
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

contactUsRouter.patch("/:id", verifyUser, authenticationAdmin(), async (req, res) => {
  try {
    const updatedMsg = await ContactUs.findOneAndUpdate({ _id: req.params.id }, { status: req.body.status }, { new: true, runValidators: true })
    return res.status(200).json(updatedMsg);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = contactUsRouter;
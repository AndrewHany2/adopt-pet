const AdoptionApplication = require("express").Router();
const Application = require("../models/AdoptionApplication");
const User = require("../models/UserModel");

AdoptionApplication.post("/", async (req, res) => {
  try {
    const app = await new Application(req.body);
    const result = await app.save();
    if (result) {
      const requestedUser = await User.findOne({
        _id: req.body.requestedUserId,
      });
      let petAdoptionRequests = requestedUser.petAdoptionRequests;
      petAdoptionRequests.push(result.petId);
      const userResult = await requestedUser.save();
      if (userResult) {
        res.status(201).json({ appId: result._id });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

AdoptionApplication.get("/:id", async (req, res) => {
  try {
    const adoptionRequest = await Application.findOne({ _id: req.params.id });
    if (adoptionRequest) {
      res.status(200).json(adoptionRequest);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


AdoptionApplication.get("/", async (req, res) => {
  try {
    const adoptionRequest = await Application.find({});
    if (adoptionRequest) {
      res.status(200).json(adoptionRequest);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
module.exports = AdoptionApplication;
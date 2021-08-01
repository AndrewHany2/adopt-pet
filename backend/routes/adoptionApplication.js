const AdoptionApplication = require("express").Router();
const Application = require("../models/AdoptionApplication");
const User = require("../models/UserModel");
const verifyUser = require("../middlewares/VerifyUser");

AdoptionApplication.get("/", async ({ query }, response) => {
  try {
    let adoptionRequests;
    if (query.status) {
      adoptionRequests = await Application.find({
        status: query.status,
      })
        .populate("requestedUserId", "email")
        .populate("petId", "_id name gender dateOfBirth type size");
      return 0;
    } else adoptionRequests = await Application.find({});
    response.status(200).json(adoptionRequests);
  } catch (error) {
    respopnse.status(500).json(error);
  }
});

AdoptionApplication.get("/accepted-by-admin", verifyUser, async (request, response) => {
  try {
    const adoptionRequests = await Application.find({ status: 'PENDING', ownerUserId: request.query.userId, acceptedByAdmin: true }).sort({ _id: -1 }).populate("requestedUserId").populate("petId");
    response.status(200).json({ result: adoptionRequests });
  } catch (error) {
    respopnse.status(500).json(error);
  }
});

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
    res.status(400).json(err);
  }
});
AdoptionApplication.patch("/acceptByUser/:id", verifyUser, async (req, res) => {
  try {
    const app = await Application.findOne({ _id: req.params.id });
    app.acceptedByUser = true;
    if (app.acceptedByAdmin && app.acceptedByUser) {
      app.status = "ACCEPTED";
    }
    const result = await app.save();
    if (result) {
      res.status(200).json(result);
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

AdoptionApplication.patch("/rejectByUser/:id", verifyUser, async (req, res) => {
  try {
    const app = await Application.findOne({ _id: req.params.id });
    app.acceptedByUser = false;
    app.status = "REJECTED";
    const result = await app.save();
    if (result) {
      res.status(200).json(result);
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = AdoptionApplication;

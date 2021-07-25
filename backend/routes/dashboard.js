const dashboard = require("express").Router();
const Pet = require("../models/PetModel");
const User = require("../models/UserModel");

dashboard.patch("/postPet/accept/:id", async (req, res) => {
  try {
    await Pet.findByIdAndUpdate(req.params.id, {
      status: "ACCEPTED",
    });
    res.status(200).json({ status: "ACCEPTED" });
  } catch (error) {
    res.status(400).json(error);
  }
});

dashboard.patch("/postPet/reject/:id", async (req, res) => {
  try {
    await Pet.findByIdAndUpdate(req.params.id, {
      status: "REJECTED",
    });
    res.status(200).json({ status: "REJECTED" });
  } catch (error) {
    res.status(400).json(error);
  }
});

dashboard.patch("/adoptPet/accept/:id", async (req, res) => {
  try {
    await Pet.findByIdAndUpdate(req.params.id, {
      isAdopted: true,
    });
    res.status(200).json({ status: "ACCEPTED" });
  } catch (error) {
    res.status(400).json(error);
  }
});

dashboard.patch("/adoptPet/reject/:id", async (req, res) => {
  try {
    await Pet.findByIdAndUpdate(req.params.id, {
      isAdopted: false,
    });
    res.status(200).json({ status: "REJECTED" });
  } catch (error) {
    res.status(400).json(error);
  }
});
dashboard.patch("/application/accept/:id", async (req, res) => {
  try {
    await App.findByIdAndUpdate(req.params.id, {
      status: "ACCEPTED",
    });
    res.status(200).json({ status: "ACCEPTED" });
  } catch (error) {
    res.status(400).json(error);
  }
});

dashboard.patch("/application/decline/:id", async (req, res) => {
  try {
    await App.findByIdAndUpdate(req.params.id, {
      status: "REJECTED",
    });
    ctx.status = 200;
    res.status(200).json({ status: "REJECTED" });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = dashboard;

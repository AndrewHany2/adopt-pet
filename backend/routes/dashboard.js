const dashboard = require("express").Router();
const Pet = require("../models/PetModel");
const User = require("../models/UserModel");
const App = require("../models/AdoptionApplication");
const { authenticationAdmin, authenticationRole } = require('../middlewares/authentication');
const verifyUser = require("../middlewares/VerifyUser");

dashboard.patch("/postPet/accept/:id", verifyUser, authenticationAdmin(), async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, {
      status: "ACCEPTED",
    });
    res.status(200).json({ status: "ACCEPTED", ...pet });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

dashboard.patch("/postPet/reject/:id", verifyUser, authenticationAdmin(), async (req, res) => {
  try {
    await Pet.findByIdAndUpdate(req.params.id, {
      status: "REJECTED",
    });
    res.status(200).json({ status: "REJECTED" });
  } catch (error) {
    res.status(400).json(error);
  }
});

dashboard.patch("/adoptPet/accept/:id", verifyUser, authenticationAdmin(), async (req, res) => {
  try {
    await Pet.findByIdAndUpdate(req.params.id, {
      isAdopted: true,
    });
    res.status(200).json({ status: "ACCEPTED" });
  } catch (error) {
    res.status(400).json(error);
  }
});

dashboard.patch("/adoptPet/reject/:id", verifyUser, authenticationAdmin(), async (req, res) => {
  try {
    await Pet.findByIdAndUpdate(req.params.id, {
      isAdopted: false,
    });
    res.status(200).json({ status: "REJECTED" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});
dashboard.patch("/application/accept/:id", verifyUser, authenticationAdmin(), async (req, res) => {
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
    res.status(200).json({ status: "REJECTED" });
  } catch (error) {
    res.status(400).json(error);
  }
});
dashboard.get("/pendingPets", verifyUser, authenticationAdmin(), async (req, res) => {
  try {
    const result = await Pet.find({ status: "PENDING" }).populate(
      "owner",
      "email"
    );
    res.status(200).json({ result });
  } catch (error) {
    return res.status(500).json(error);
  }
});
dashboard.get("/pendingApplications", verifyUser, authenticationAdmin(), async (req, res) => {
  try {
    const result = await App.find({ status: "PENDING" })
      .populate("requestedUserId", "email")
      .populate("petId", "email name gender dateOfBirth petType size image");
    res.status(200).json({ result });
  } catch (error) {
    return res.status(500).json(error);
  }
});

dashboard.get("/adoptpet/:id", verifyUser, async (req, res) => {
  const id = req.params.id;
  try {
    //   const requests = await App.find({ requestedUserId : id})
    //  res.status(200).json(requests)

    const requests = await App.find({ requestedUserId: id }).populate("petId");
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

dashboard.patch("/assignrole/:id", verifyUser, authenticationRole('SUPER_ADMIN'), async (req, res) => {
  try {
    const userRole = req.query.role
    console.log(userRole)
    const updateUser = await User.findOneAndUpdate({ _id: req.params.id }, { role: userRole })
    const user = await User.findOne({ _id: req.params.id })
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);

  }

});


module.exports = dashboard;

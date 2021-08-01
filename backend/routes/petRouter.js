const petRouter = require("express").Router();
const Pet = require("../models/PetModel");
const upload = require("../helpers/multer");
const verifyUser = require("../middlewares/VerifyUser");

petRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findOne({ _id: id });
    if (pet) {
      res.status(200).json(pet);
    } else res.status(404).send("pet not found, invalid id");
  } catch (err) {
    next(err);
  }
});

petRouter.get("/", async (req, res, next) => {
  try {
    const queries = req.query;
    if (queries.status === "PENDING") {
      const result = await Pet.find({ status: queries.status });
      res.status(200).json({ result });
      return;
    }
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;
    delete queries.limit;
    delete queries.page;
    const age = req.query.age;
    delete queries.age;

    let youngDate = new Date();
    youngDate.setFullYear(youngDate.getFullYear() - 2);
    let oldDate = new Date();
    oldDate.setFullYear(oldDate.getFullYear() - 5);
    let seniorDate = new Date();
    seniorDate.setFullYear(seniorDate.getFullYear() - 15);
    let conditions = {};
    for (i of Object.keys(queries)) {
      if (queries[i] !== "") {
        conditions[i] = queries[i];
        if (queries[i].includes(",")) {
          multiple = queries[i].split(",");
          conditions[i] = [...multiple];
        }
      }
    }
    switch (age) {

      case "young":
        conditions.dateOfBirth = {
          $gte: youngDate,
        };
        break;

      case "old":
        conditions.dateOfBirth = {
          $gte: oldDate,
          $lte: youngDate,
        };
        break;

      case "senior":
        conditions.dateOfBirth = {
          $gte: seniorDate,
          $lte: oldDate,
        };
        break;
    }
    const list = await Pet.find(conditions)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ updatedAt: -1 })
      .exec();
    const count = await Pet.countDocuments(conditions);
    if (list)
      res.status(200).json({
        list,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
      });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

petRouter.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  Pet.deleteOne({ _id: id })
    .then((result) => {
      res.status(200).json({ result: result });
    })
    .catch((err) => {
      next(err);
    });
});

petRouter.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const pet = await Pet.findOne({ _id: id });
    const name = req.body.name || pet.name;
    const gender = req.body.gender || pet.gender;
    const neutered = req.body.neutered || pet.neutered;
    const age = req.body.age || pet.age;
    const image = req.body.image || pet.image;
    pet.name = name;
    pet.gender = gender;
    pet.neutered = neutered;
    pet.age = age;
    pet.image = image;
    const response = await Pet.save();
    if (response) {
      res.status(200).json({ response: response });
    }
  } catch (e) {
    next(e);
  }
});

petRouter.post("/", upload, (req, res) => {
  const pet = new Pet({
    name: req.body.name,
    gender: req.body.gender,
    vaccinated: req.body.vaccinated,
    dateOfBirth: req.body.dateOfBirth,
    petType: req.body.petType,
    size: req.body.size,
    description: req.body.description,
    image: `/images/${req.file.filename}`,
    status: req.body.status,
    owner: req.body.owner,
  });
  pet
    .save()
    .then((result) => {
      res.status(201).json({ petId: result._id });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

petRouter.get("/userpets/list", verifyUser, async (req, res) => {
  try {
    const query = req.query.postedpets;
    pets = query.split(",");
    const userPetList = await Pet.find({ _id: { $in: pets } });
    return res.status(201).json(userPetList);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = petRouter;

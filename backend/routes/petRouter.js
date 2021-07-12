const petRouter = require("express").Router();
const Pet = require("../models/PetModel");
const upload = require("../helpers/multer");
petRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
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
    switch (queries.age) {
      case "young":
        queries.age = "1";
        break;
      case "old":
        queries.age = "2";
        break;
      case "senior":
        queries.age = "3";
        break;
      default:
        break;
    }
    let conditions = {};
    for (i of Object.keys(queries)) {
      if (queries[i] !== "") conditions[i] = queries[i];
    }
    const pets = await Pet.find(conditions).exec();
    if (pets) res.status(200).json(pets);
  } catch (err) {
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
petRouter.post('/adopt',upload,(req,res)=>{
  const pet =new Pet({
    name:req.body.name,
    gender :req.body.gender,
    vaccinated :req.body.vaccinated,
    dateOfBirth : req.body.dateOfBirth,
    petType: req.body.petType,
    size:req.body.size,
    description:req.body.description,
    image:`/images/${req.file.filename}`,
    status: req.body.status
  }) 
  pet.save()
  .then((result)=>{
    console.log(result)
    res.status(201).json({"status":"adoption pet"})
  })
  .catch((err)=>{
    onsole.log(err)
    res.status(400).json(err)
  })
});

module.exports = petRouter;

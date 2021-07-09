const petRouter = require("express").Router();
const Pet = require("../models/PetModel");
const upload = require('../helpers/multer')
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
    const pets = await Pet.find({});
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
    age : req.body.age,
    size:req.body.size,
    description:req.body.description,
    image:`/images/${req.file.filename}`
  }) 
  pet.save()
  .then((result)=>{
    console.log(result)
    res.status(201).json({"status":"adoption pet"})
  })
  .catch((err)=>{
    res.status(400).json(err)
  })
});

module.exports = petRouter;

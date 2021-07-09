const pets = [
  {
    name: "pet1",
    gender: "female",
    neutered: "Yes",
    age: "2 years",
    image: "./resources/adoption1-185x185.jpg",
  },
  {
    name: "pet1",
    gender: "female",
    neutered: "Yes",
    age: "2 years",
    image: "./resources/adoption2-185x185.jpg",
  },
  {
    name: "pet1",
    gender: "female",
    neutered: "Yes",
    age: "2 years",
    image: "./resources/adoption3-185x185.jpg",
  },
  {
    name: "pet1",
    gender: "female",
    neutered: "Yes",
    age: "2 years",
    image: "./resources/adoption4-185x185.jpg",
  },
  {
    name: "pet1",
    gender: "female",
    neutered: "Yes",
    age: "2 years",
    image: "./resources/adoption5-185x185.jpg",
  },
  {
    name: "pet1",
    gender: "female",
    neutered: "Yes",
    age: "2 years",
    image: "./resources/adoption6-185x185.jpg",
  },
  {
    name: "pet1",
    gender: "female",
    neutered: "Yes",
    age: "2 years",
    image: "./resources/adoption7-185x185.jpg",
  },
  {
    name: "pet1",
    gender: "female",
    neutered: "Yes",
    age: "2 years",
    image: "./resources/adoption8-185x185.jpg",
  },
];
const Pet = require("./models/PetModel");
const db = require("./helpers/dbConnection");
require("dotenv").config();

db.connectDB();

const importData = async () => {
  try {
    const createdPets = await Pet.insertMany(pets);
    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};
importData();

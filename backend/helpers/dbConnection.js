const mongoose = require("mongoose");
const connectDB = () => {
  const url = process.env.MONGO_URI;
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("connected to database"));
};
exports.connectDB = connectDB;

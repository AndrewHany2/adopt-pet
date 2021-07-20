require("dotenv").config();
const db = require("./helpers/dbConnection");
const petRouter = require("./routes/petRouter");
const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/UserRouter");
const app = express();
db.connectDB();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = require("path");
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use("/api/user", userRouter);

app.use("/api/pets", petRouter);
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err });
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

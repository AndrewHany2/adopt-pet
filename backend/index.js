require("dotenv").config();
const db = require("./helpers/dbConnection");
const petRouter = require("./routes/petRouter");
const express = require("express");
const morgan = require("morgan");
const app = express();
db.connectDB();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/pets", petRouter);
app.use((err, req, res, next) => {
  res.status(500).json({ msg: err });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

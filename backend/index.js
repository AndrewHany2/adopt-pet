require("dotenv").config();
const db = require("./helpers/dbConnection");
const petRouter = require("./routes/petRouter");
const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/UserRouter");
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");
const dashboard = require("./routes/dashboard");
const application = require("./routes/adoptionApplication");
const authenticationRole = require("./middlewares/authentication");
const contactUsRouter = require("./routes/ContactUs")

const app = express();
db.connectDB();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = require("path");

app.use("/images", express.static(path.join(__dirname, "/images")));
app.use("/api/user", userRouter);
app.use("/api/pets", petRouter);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/admin", dashboard);
app.use("/api/adoptionRequest", application);
app.use("/api/contactus", contactUsRouter)
app.use((err, req, res, next) => {
  res.status(500).json({ message: err });
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

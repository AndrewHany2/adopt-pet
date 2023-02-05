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
const contactUsRouter = require("./routes/ContactUs");
const path = require('path');
const cors = require('cors');
const resetPasswordRouter = require("./routes/ResetPasswordRouter");

const PORT = process.env.PORT || 8000;

const app = express();
db.connectDB();

const server = module.exports = require('http').Server(app);
const io = require("socket.io")(server);

let users = [];
const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};
const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};
const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on('connection', (socket) => {
  //when ceonnect
  console.log("a user connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user?.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
  });

});

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "/images")));

const root = path.join(__dirname, "build");

app.use("/api/user", userRouter);
app.use("/api/resetPassword", resetPasswordRouter);
app.use("/api/pets", petRouter);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/admin", dashboard);
app.use("/api/adoptionRequest", application);
app.use("/api/contactus", contactUsRouter);
app.use((err, req, res, next) => {
  res.status(500).json({ message: err });
});

app.use(express.static(root));
app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

server.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const registerRouter = require("./routes/register/register.router");
const loginRouter = require("./routes/login/login.router");
const usersRouter = require("./routes/users/users.router");
const authenticate = require("./auth/server.auth");
const friendsRouter = require("./routes/friends/friends.router");
const chatsRouter = require("./routes/chats/chats.router");
const messagesRouter = require("./routes/messages/messages.router");

const app = express();

const corsOptions = {
  origin: "https://chat.bipinbashyal.com.np", // Allow only this origin
  credentials: true, // Allow credentials (cookies, etc.)
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/users", authenticate, usersRouter);
app.use("/friends", authenticate, friendsRouter);
app.use("/chats", authenticate, chatsRouter);
app.use("/messages", authenticate, messagesRouter);

app.get("/", (req, res) => {
  res.send("welcome to the backend");
});

module.exports = app;

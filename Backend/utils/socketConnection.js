const { WebSocketServer } = require("ws");
require("dotenv").config();
const authenticateUser = require("../auth/server.auth");

const clients = new Map();

const socketServer = (server) => {
  const wss = new WebSocketServer({ server });
  wss.on("connection", (ws, req) => {
    authenticateUser(req, null, (err) => {
      if (err) {
        ws.close(1008, "unauthorized");
        return;
      }
      console.log(" new client Connected");
      const userId = req.user._id;
      clients.set(userId, ws);
      ws.on("message", (message) => {
        console.log(
          `message received from ${(req, user.username)}: ${message}`
        );
      });
      ws.on("close", () => {
        console.log("Client disconnected");
        clients.delete(userId);
      });
    });
  });
};

module.exports = socketServer;

const { WebSocketServer } = require("ws");
require("dotenv").config();
const authenticateUser = require("../auth/server.auth");
const { getChatMembers } = require("../models/chat/chat.model");
const { addMessage } = require("../models/message/message.model");
const clients = new Map();

function parseCookies(cookieHeader) {
  const cookies = {};
  if (!cookieHeader) return cookies;

  // Split the cookie string at each semicolon
  const cookieArray = cookieHeader.split(";");

  // Iterate over each key-value pair
  cookieArray.forEach((cookie) => {
    // Split the pair at the first '='
    const [name, ...rest] = cookie.split("=");
    // Join the remaining parts to handle cases where the value might contain '='
    const value = rest.join("=").trim();
    // Trim any leading/trailing spaces from the name and value
    cookies[name.trim()] = decodeURIComponent(value);
  });

  return cookies;
}

const socketServer = (server) => {
  const wss = new WebSocketServer({ server });
  wss.on("connection", (ws, req) => {
    req.cookies = parseCookies(req.headers.cookie);
    authenticateUser(req, null, (err) => {
      if (err) {
        ws.close(1008, "unauthorized");
        return;
      }
      console.log(" new client Connected");

      const userId = req.user._id.toString();
      if (!clients.has(userId)) {
        clients.set(userId, ws);
      }
      console.log("Total Clients: ", clients.keys());
      ws.on("message", async (message) => {
        message = JSON.parse(message);
        message = await addMessage(message);

        console.log(
          `message received from ${req.user.username}: ${message._doc.content}`
        );
        const members = await getChatMembers(message.chat_id);
        members.forEach((member) => {
          member = member.toString();
          console.log(member, member == "66accacc4187208dfeaa2823");
          if (member != message.send_by) {
            console.log("entered if");
            if (clients.has(member)) {
              console.log("client has");
              clients.get(member).send(JSON.stringify(message._doc));
              console.log("sent to: ", member);
            }
          }
        });
      });
      ws.on("close", () => {
        console.log("Client disconnected");
        clients.delete(userId);
        console.log("Total Clients: ", clients.keys());
      });
    });
  });
};

module.exports = socketServer;

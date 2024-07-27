const http = require("http");
const app = require("./app");
require("dotenv").config();

const connectMongo = require("./utils/mongoConnection");

const server = http.createServer(app);
const PORT = process.env.PORT;

const connectServer = async () => {
  try {
    await connectMongo();
    server.listen(PORT, () => {
      console.log(`server is running on: http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

connectServer();

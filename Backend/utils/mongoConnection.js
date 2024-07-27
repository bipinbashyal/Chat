// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri = `mongodb+srv://storage3inmymobile:${process.env.MONGO_PASS}@chatusers.mufvlwv.mongodb.net/?retryWrites=true&w=majority&appName=ChatUsers`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function connectMongo() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     console.log("mongodb connected");
//   } catch (err) {
//     throw err;
//   }
// }
// module.exports = {
//   client,
//   connectMongo,
// };

const mongoose = require("mongoose");

const mongoURL = `mongodb+srv://storage3inmymobile:${process.env.MONGO_PASS}@chatusers.mufvlwv.mongodb.net/chat_application?retryWrites=true&w=majority&appName=ChatUsers`;

async function connectMongodb() {
  await mongoose.connect(mongoURL);
}

mongoose.connection.once("open", () => {
  console.log("mongodb server connected...");
});

mongoose.connection.on("error", (err) => {
  console.error("Cannot connect to mongodb server ", err);
});

module.exports = connectMongodb;

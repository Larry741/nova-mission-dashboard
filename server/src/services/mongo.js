const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.on("open", () => {
  console.log("mongodb connected");
});

const connectMongoDb = async () => {
  try{
    await mongoose.connect(MONGO_URL);
  } catch (err) {
    console.log(err.message)
  }
}

const disconnectMongoDb = async () => {
  await mongoose.connection.close();
};

module.exports = { connectMongoDb, disconnectMongoDb };

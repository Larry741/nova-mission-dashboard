const mongoose = require("mongoose");

mongoose.connection.once("open", () => {
	console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
	console.error(err);
});

async function mongoConnect(URL) {
  await mongoose.connect(URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {mongoConnect, mongoDisconnect};

const mongoose = require("mongoose");

// Mongoose Connect
mongoose.connect("mongodb://localhost:27017/parking", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => console.log(`Everything is okay, mongoDB is connected...`));

return db;
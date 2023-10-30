const mongoose = require("mongoose");

// Update the MongoDB connection string to connect to a locally running MongoDB server
const MONGODB_URI = 'mongodb://mongodb:27017/pucsd';


mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
  });

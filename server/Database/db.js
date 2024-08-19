require('dotenv').config();
const mongoose=require('mongoose');
const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("---***Database Connected Successfully***---");
  } catch (error) {
    console.log("Database connection failed:", error.message);
  }
}

module.exports = connectToMongo;

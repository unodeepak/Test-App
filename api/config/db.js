const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/testdb');
    console.log("✅✅✅✅✅✅✅✅✅✅✅✅ => Database connected <= ✅✅✅✅✅✅✅✅✅✅✅✅");
  } catch (err) {
    console.log("❌❌❌❌❌❌❌❌❌❌❌ => Database Not Connected <= ❌❌❌❌❌❌❌❌❌❌❌");
    console.error(err);
  }
};

module.exports = connectDb;

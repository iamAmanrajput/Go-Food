const mongoose = require("mongoose");
require("dotenv").config();

const mongoDB = () => {
  mongoose
    .connect(process.env.mongoURI)
    .then(async () => {
      console.log("Connected");
      const fetch_data = mongoose.connection.db.collection("food_items");
      const data = await fetch_data.find({}).toArray();
      const foodCategory = mongoose.connection.db.collection("foodCategory");
      const catdata = await foodCategory.find({}).toArray();
      global.food_items = data;
      global.foodCategory = catdata;
    })
    .catch((error) => {
      console.error("---", error);
    });
};

module.exports = mongoDB;

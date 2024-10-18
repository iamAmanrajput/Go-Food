const mongoose = require("mongoose");
// require("dotenv").config();

const mongoDB = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/GoFood")
    .then(async () => {
      console.log("Database Connected Successfully");
    })
    .catch((error) => {
      console.log("-----", error);
    });
};

// const mongoDB = async () => {
//   await mongoose
//     .connect(
//       "mongodb+srv://amiframes:Amit%408368866592@cluster0.5swwz.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0"
//     )
//     .then(async () => {
//       console.log("Connected");
//       const fetch_data = mongoose.connection.db.collection("food_items");
//       const data = await fetch_data.find({}).toArray();
//       const foodCategory = mongoose.connection.db.collection("foodCategory");
//       const catdata = await foodCategory.find({}).toArray();
//       global.food_items = data;
//       global.foodCategory = catdata;
//     })
//     .catch((error) => {
//       console.error("---", error);
//     });
// };

module.exports = mongoDB;

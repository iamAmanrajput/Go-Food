const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
const cors = require("cors");
mongoDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//for allowing cores
app.use(cors());
// app.use((req,res,next)=>{
//   res.setHeader('Access-Control-Allow-Origin',"http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With", Content-Type, Accept"
//   );
//   next();
// })

app.get("/", (req, res) => {
  res.send("hi  i ama root directory");
});

app.use("/api", require("./Routes/CreateUser"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

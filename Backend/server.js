const express = require("express"); // common js ile yaptık import ile yapmadık
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const mainRoute = require("./routes/index");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const port = 5000;

dotenv.config();



const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};
 
// middlewares

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use("/api", mainRoute);

app.listen(port, () => {
  connect();
  console.log(`Sunucu ${port} portunda çalışıyor`);
});

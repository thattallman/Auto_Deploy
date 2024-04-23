const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const userRoutes = require("./Routes/userAuth");
const deployRoutes = require("./Routes/git");

const MONGO_URL = process.env.MONGO_URL;
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Succesfully connected to mongo with url", MONGO_URL);
  })
  .catch((error) => {
    console.log("Hey user there is this error ", error);
  });
  
app.use("/user", userRoutes);
app.use("/deploy", deployRoutes)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});

// server/index.js
const express = require("express");
//const cors =require('cors');
const mongoose = require("mongoose");
const register = require("../routes/register");

const PORT = process.env.PORT || 3001;
//const uri = process.env.DB_URI;
const app = express();

//require("dotenv").config();
//app.use(response.json());
//app.use(cors());

  app.use("/api/register", register);

  app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
mongoose
  .connect(
    "mongodb+srv://captainkoder:elgplanTo221@cluster0.9cx8o.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MONGODB SUCCESSFULLY CONNECTED, "))
  .catch((err) => console.log("MONGODB ERROR IN CONNECTION....", err.message));

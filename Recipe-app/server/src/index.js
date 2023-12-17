const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require('./routes/authRouter')
const recipeRouter = require ("./routes/recipeRoute");


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));





app.use("/recipes",recipeRouter)
app.use('/users',authRouter)

//connect mongodb


mongoose
  .connect("mongodb://127.0.0.1:27017/recipez", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });



 

app.listen(3001, () => {
  console.log("Server is running at port 3001");
});

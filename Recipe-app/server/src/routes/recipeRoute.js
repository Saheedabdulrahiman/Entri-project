const express = require("express");
const RecipeModel = require("../models/RecipeModel");



const router = express.Router();

//to show or display  recipes in home 

router.get("/",async (req,res) => {
try {
      const response= await RecipeModel.find({});
      res.json(response)
    
} catch (error) {
    res.json(err)
}
    
})

//code to create a recipe 

router.post("/",async (req,res) => {
    try {
        const recipe = new RecipeModel(req.body)
        const response = await recipe.save();
        res.json(response)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    
});

//code to savelater 
  













module.exports = router;
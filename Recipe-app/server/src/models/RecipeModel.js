
const mongoose = require("mongoose");


// Define the User Schema
const Schema = mongoose.Schema;
const recipeSchema = new Schema({
  
  // Define other fields as per your requirements
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  },
  imageUrl: {
    type: String,
    default: 'default-image-url.jpg', // You can set a default image URL
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model for the author
    required: true,
  }
});


const RecipeModel = mongoose.model('Recipes', recipeSchema);

module.exports = RecipeModel;

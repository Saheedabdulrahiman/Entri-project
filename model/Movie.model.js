const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  
  movie: { type: String, required: true },
  actors: {
    type:String,
    required: true,
  },
  director: {
    type:String,
    required: false,
  },
  genre: {
    type: String,
    required: false,
  },
  // Other properties if needed
});

module.exports = mongoose.model("Movies", movieSchema);

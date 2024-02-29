const Movie = require('../model/Movie.model')

const addMovie = async (req, res) => {
    try {
        const { movie,actors,director,genre } = req.body;

        if (!movie || !actors || !director || !genre) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const newMovie = new Movie({ movie,actors,director,genre });
        const savedMovie = await newMovie.save();

        res.status(201).json(savedMovie);
    } catch (error) {
        console.error('Error adding the movie', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteMovie = async (req, res) => {
    try {
        // Find the project by ID and delete it
        const deleteMovie = await Movie.findByIdAndDelete(req.params.id);

        if (!deleteMovie) {
            return res.status(404).json({ error: 'movie not found' });
        }

        res.status(200).json({ message: 'movie deleted successfully' });
    } catch (error) {
        console.error('Error deleting movie:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const editMovie = async(req,res) =>{
    try {
        const editMovie = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({
            status:"success",
            data:{
              editMovie
            }
        })
    } catch (error) {
        res.status(404).json({
          status:"fail",
          message:error.message
        })
      }
}

const listAllMovies = async (req,res) => { 
    try {
      const movieData = await Movie.find();
      res.status(200).json(movieData)
    } catch (error) {
      res.status(404).json({
        status:"failed to fetch movies",
        message:error.message
      })
    }
   }

   

  

module.exports ={
    addMovie,
    deleteMovie,
    editMovie,
    listAllMovies
   
}
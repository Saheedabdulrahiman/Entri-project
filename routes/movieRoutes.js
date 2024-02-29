const express = require('express');
const router = express.Router();
const movieController = require('../controller/movieController')

router.post('/add-movie', movieController.addMovie);
router.delete('/delete-movie/:id',movieController.deleteMovie)
router.get('/list-movie',movieController.listAllMovies)
router.patch('/edit-movie/:id',movieController.editMovie)

module.exports = router;

const express = require("express");
const router = express.Router();

const Movie = require('../../models/Movie');

//@route GET api/movies/test
//@description tests movie route
//@access Public
router.get('/test'), (req, res) => res.send("test route works");

//@route GET api/movies
//@description gets all movies
//@access Public
router.get('/', (req, res) => {
    Movie.find()
    .then(movie => res.json(movie))
    .catch(err => res.status(404).json({
        nomoviesfound: "No movies in database."}));
    });

//@route GET api/movies/:id
//@description gets one movie by id
//@access Public
router.get('/:id', (req, res) => {
    Movie.findById(req.params.id)
    .then(movie => res.json(movie))
    .catch(err => res.status(404).json({
        nomoviesfound: "No movies in database."}));
    });

//@route POST api/movies
//@description add/save movies
//@access Public
router.post('/', (req, res) => {
    Movie.create(req.body)
    .then(movie => res.json({msg: 'Movie added successfully!'}))
    .catch(err => res.status(400).json({ error: 'Movie not added to database'}))
});

//@route GET api/movies/:id
//@description update movie information
//@access Public

router.put('/:id', (req, res) => {
    Movie.findByIdAndUpdate(req.params.id, req.body)
    .then(movie => res.json({msg: 'Movie updated successfully'}))
    .catch(err => res.status(400).json({error: 'Movie could not be updated'}));
});

//@route DELETE api/movies/:id
//@description delete movie from database
//@access Public
router.delete('/:id', (req, res) =>{
    Movie.findByIdAndRemove(req.params.id, req.body)
    .then(movie => res.json({ msg: 'Movie successfully deleted'}))
    .catch(err => res.status(400).json({error: 'Movie remains in database'}));
});

module.exports = router;

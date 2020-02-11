const express = require("express");
const router = express.Router();

const Grad = require('../../models/Grad');

//@route GET api/grads/test
//@description tests grad route
//@access Public
router.get('/test'), (req, res) => res.send("test route works");

//@route GET api/grads
//@description gets all grads
//@access Public
router.get('/', (req, res) => {
    Grad.find()
    .then(grad => res.json(grad))
    .catch(err => res.status(404).json({
        noGradFound: "No grads in database."}));
    });

//@route GET api/grads/:id
//@description gets one grad by id
//@access Public
router.get('/:id', (req, res) => {
    Grad.findById(req.params.id)
    .then(grad => res.json(grad))
    .catch(err => res.status(404).json({
        noGradFound: "No grads in database."}));
    });

//@route POST api/grads
//@description add/save grads
//@access Public
router.post('/', (req, res) => {
    Grad.create(req.body)
    .then(grad => res.json({msg: 'Grad added successfully!'}))
    .catch(err => res.status(400).json({ error: 'Grad not added to database'}))
});

//@route GET api/grads/:id
//@description update grad information
//@access Public

router.put('/:id', (req, res) => {
    Grad.findByIdAndUpdate(req.params.id, req.body)
    .then(grad => res.json({msg: 'Grad updated successfully'}))
    .catch(err => res.status(400).json({error: 'Grad could not be updated'}));
});

//@route DELETE api/grads/:id
//@description delete grad from database
//@access Public
router.delete('/:id', (req, res) =>{
    Grad.findByIdAndRemove(req.params.id, req.body)
    .then(grad => res.json({ msg: 'Grad successfully deleted'}))
    .catch(err => res.status(400).json({error: 'Grad remains in database'}));
});

module.exports = router;

const mongoose = require('mongoose');

const GradSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    starring: {
        type: [String]
    },
    yearOfRelease: {
        type: Date,
        required: true
    },
    description : {
        type: String
    }
})

module.exports = Movie = mongoose.model('grad', GradSchema);

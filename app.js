const mongoose = require('mongoose');
const express = require('express');
const connectDb = require('./config/db.js');

const app = express();

connectDb();

app.get('/', (req, res) => {
    res.send('Request sent to server');
})


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
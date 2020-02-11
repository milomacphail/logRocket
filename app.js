const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const grads = require('./routes/api/grads');

const app = express();

connectDB();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json());

app.use('/api/grads', grads);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
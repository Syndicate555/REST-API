const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const port = 3000;

app.use(bodyParser.json());

//MiddleWares
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);
app.use(cors());

//Routing
app.get('/', (req, res) => {
    res.send('We are home');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () =>
    console.log('connected to DB!')
);

//Listening
app.listen(port, () => console.log(`Server started on port ${port}`));
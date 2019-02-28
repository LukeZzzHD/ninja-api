const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connect to MongoDB
mongoose.connect('mongodb://localhost/ninjago', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

//Error handler
app.use(function (err, req, res, next) {
    res.status(422).send({ error: err.message });
});



app.listen(process.env.port || 4000, (err) => {
    if (err) {
        console.log('something bad happened: ' + err);
    } else {
        console.log(`now listening for request`);
    }
});
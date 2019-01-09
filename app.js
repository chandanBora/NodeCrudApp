//app.js
const express = require('express');
const bodyParser  = require('body-parser');


//Import routes for the product
const product = require('./routes/product.route');

//initialize the express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/productstutorial';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port  = '3000';

app.listen(port,  () => {
  console.log('Server is up & running on port number ' + port);
});

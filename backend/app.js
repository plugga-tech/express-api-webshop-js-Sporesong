var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var ordersRouter = require('./routes/orders');
var app = express();

//const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");
async function init () {
    try {
        const options = {useNewUrlParser: true, useUnifiedTopology: true};
        await mongoose.connect("mongodb://127.0.0.1:27017/Suvi-Sivula", options);
        console.log("Uppkoppling mot databasen fungerar!");
    }
 catch(error) {
 console.error(error);
 }
}

init(); 


//const mongoClient = require("mongodb").mongoClient;

/* MongoClient.connect("mongodb://127.0.0.1:27017", { 
    useUnifiedTopology: true}).then( client => {
        console.log("Uppkoppling mot databasen fungerar!");
        const database = client.db("Suvi-Sivula");
        app.locals.db = database;
    }); */


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

module.exports = app;

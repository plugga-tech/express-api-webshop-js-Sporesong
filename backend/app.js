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
        await mongoose.connect("mongodb://127.0.0.1:27017/Suvi-sivula", options);
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

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

//se alla användare
app.get("/users", function(request, response) {
response.send(users);
});

//se specifik användare
app.get("/users/:id", function(request, response) {
    let showUser = request.params.userId
    response.send("usersRouter running " + "visa användare med Id " + showUser)
});

//logga in användare
app.get("/users/login", function(request, response) {
    let printLoginForm = `<h1>Logga in användare</h1><form action="saveUser" method="post">Användarnamn<br>
    <input type="text" name="userName"><button>logga in</button></form>`;
    response.send(printLoginForm); 
});

/*spara namnet och välkomna användare
app.post("/saveUser", function(request, response) {
    response.send("Välkommen " + request.body.userName);
});*/

//lägg till och spara användare som jsonobjekt
app.get("/users/add/:json", function(request, response) {
/*     let users = ;
    response.json(users); */
});

//visa alla produkter
app.get("/products", function(request, response) {
    response.send(products);
    });

//visa specifika produkter
app.get("/products/:id", function(request, response) {
    let showProduct = request.params.productId
    response.send("productsRouter running " + "visa produkt med Id " + showProduct)
});

//skapa och lägg till produkt som jsonobjekt
app.get("/products/add/:json", function(request, response) {
    /*     let products = ;
        response.json(products); */
    });

//skapa order
app.get("/orders/add", function(request, response) {
    
    }); 
    
//visa alla ordrar
app.get("/orders", function(request, response) {
    response.send(orders);
    });    

/* app.get("/products/:category/:productId", function(request, response) {
    response.send("visar produkter i kategorin " + request.params.category + " med produktId " + request.params.productId)
}); */




module.exports = app;

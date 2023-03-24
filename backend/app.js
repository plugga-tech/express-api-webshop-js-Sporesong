var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var ordersRouter = require('./routes/orders');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

//visa produkter
app.get("/products/:productId", function(request, response) {
    let showProduct = request.params.productId
    response.send("productsRouter running " + "visa produkt med Id " + showProduct)
});

app.get("/products/:category/:productId", function(request, response) {
    response.send("visar produkter i kategorin " + request.params.category + " med produktId " + request.params.productId)
});

//logga in användare
app.get("/login", function(request, response) {
    let printLoginForm = `<h1>Logga in användare</h1><form action="saveUser" method="post">Användarnamn<br>
    <input type="text" name="userName"><button>logga in</button></form>`;
    response.send(printLoginForm); 
});

//spara namnet och välkomna användare
app.post("/saveUser", function(request, response) {
    response.send("Välkommen " + request.body.userName);
});

//spara användare som jsonobjekt
app.get("/json", function(request, response) {
/*     let users = ;
    response.json(users); */
});

app.get("/test", function(request, response) {
    response.sendFile("public/test.html", {root: __dirname});
});

module.exports = app;

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var hbs = require("express-handlebars");

// Require the routes and use them 
var routes = require("./routes/routes");

// Initialize express
var app = express();

// set the port
var port = process.env.PORT ||3000;

// set up the HBS view engine
app.engine('hbs', hbs({defaultLayout: 'main', extname: 'hbs', partialsDir: [__dirname + '/views/partials']}));
app.set('view engine', 'hbs');

// User morgan for debug loggin
app.use(logger("dev"));

// set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// set up the public direnctrory as static
app.use(express.static("public"));

app.use("/", routes);

// Start up the express server
// Listen on port 3000
app.listen(port, function(){
    console.log("We run this B* on port:", port);
});
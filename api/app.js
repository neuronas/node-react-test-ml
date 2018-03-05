if (process.env.NODE_ENV !== 'prod') {
  require('dotenv').config()
}

var express = require("express"),
    app = express(),
    port = process.env.PORT || 4000,
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");


// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Routes
var routes = require("./routes/apiRoutes");
routes(app)

// Middlewar
app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

// cors
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// start Server
app.listen(port, () => {
  console.log("Node server running on http://localhost:"+ port);
});

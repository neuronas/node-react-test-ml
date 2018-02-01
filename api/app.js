if (process.env.NODE_ENV !== 'prod') {
  require('dotenv').config()
}

var express = require("express"),
    app = express(),
    port = process.env.PORT || 4000,
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");


if (process.env.PERSIST === "true") {
  var mongoose = require("mongoose"),
      Hotels = require("./models/apiModel");

  if(process.env.DB_HOST && process.env.DB_NAME && process.env.DB_PORT) {
    var DB_URI = process.env.DB_HOST+":"+process.env.DB_PORT+"/"+process.env.DB_NAME
  }
  /* conexion a la base de datos (MongoDB instance) */
  mongoose.connect(DB_URI || 'mongodb://localhost/dbtest', {useMongoClient:true});
  mongoose.connection.once('open', () => {
      console.log('mongoDB Connected');
      Hotels.initHotel(Hotels)
  }).on('error', (error) => {
      console.log('CONNECTION ERROR:',error);
  });
}

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

// start Server
app.listen(port, () => {
  console.log("Node server running on http://localhost:"+ port);
});


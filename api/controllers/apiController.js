'use strict';
var Util = require("../util/functions");
const PERSIST = process.env.PERSIST || "false";
var data = []

if (PERSIST === "true") {
var mongoose = require('mongoose'),
    Hotels = mongoose.model('Hotels');
}

/*
* lista todos los registros 
*/
exports.listar = function(req, res) {
  if (PERSIST === "true") {
    Hotels.find({}, function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });

  } else {

    if (data.length == 0) {
      Util.loadData(function(_data){
        data = _data
        res.json(data)
      })
    } else {
      res.json(data)
    }
  }
}

/*
 * lista registros que coincidan con el filtro
 */
exports.filtrar = function(req, res) {
  var stars = req.body.stars

  if (PERSIST === "true") {
    Hotels.find({stars}, function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });

  } else {
    var result = [];
    if (data.length == 0) {
      Util.loadData(function(_data){
        data = _data
      })
    } else {
      data.forEach((val, key) => {
        if (val.stars === parseFloat(stars) || stars === "all") {
          result.push(val)
        }
      })
      res.json(result)
    }

  }
}

/* 
* crea un registro en la coleccion
* params:
*    {
*      "name": "Hotel Stefanos",
*      "stars": 3,
*      "price": 994.18,
*      "image": "4900059_30_b.jpg",
*      "amenities": [
*        "safety-box",
*        "nightclub",
*        "deep-soaking-bathtub",
*        "beach",
*        "business-center"
*      ]
*    }
*/
exports.guardar = function(req, res) {
  var params = req.body;

  var Hotel = new Hotels({
    name:    params.name,
    stars:     params.stars,
    price:  params.price,
    image:   params.image,
    amenities:  params.amenities
  });

  Hotel.save(function(err, Hotel) {
    if(err) return res.send(500, err.message);
    res.status(200).jsonp(Hotel);
  });

}
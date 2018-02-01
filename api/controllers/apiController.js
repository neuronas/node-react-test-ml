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
exports.listar = (req, res) => {
  if (PERSIST === "true") {
    Hotels.find({}, (err, data) => {
      if (err)
        res.send(err);
      res.json(data);
    });

  } else {

    if (data.length == 0) {
      Util.loadData((_data) => {
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
exports.filtrar = (req, res) => {
  var stars = req.body.stars

  if (PERSIST === "true") {
    Hotels.find({stars}, (err, data) => {
      if (err)
        res.send(err);
      res.json(data);
    });

  } else {
    var result = [];
    if (data.length == 0) {
      Util.loadData((_data) => {
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
* crea un nuevo registro en una coleccion
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
exports.guardar = (req, res) => {
  var params = req.body;

  var Hotel = new Hotels({
    name:    params.name,
    stars:     params.stars,
    price:  params.price,
    image:   params.image,
    amenities:  params.amenities
  });

  Hotel.save((err, Hotel) => {
    if(err) return res.send(500, err.message);
    res.status(200).jsonp(Hotel);
  });

}

/*
* actualiza un registro
*/
exports.actualizar = (req, res) => {
  var params = req.body.hotel

  Hotel.findById(params.id, function(err, hotel) {

    hotel.name      =  params.name,
    hotel.stars     =  params.stars,
    hotel.price     =  params.price,
    hotel.image     =  params.image,
    hotel.amenities =  params.amenities

    hotel.save(function(err) {
      if(!err) {
        console.log('Updated');
      } else {
        console.log('ERROR: ' + err);
      }
      res.send(hotel);
    });
  });
}

/*
* Borra un Hotel con el ID especificaado
*/
exports.eliminar = (req, res) => {
  var params = req.body.hotel

  Hotel.findById(params.id, function(err, hotel) {
    hotel.remove(function(err) {
      if(!err) {
        console.log('Removed');
      } else {
        console.log('ERROR: ' + err);
      }
    })
  });

}

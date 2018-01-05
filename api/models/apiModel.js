'use strict';
var mongoose = require("mongoose"),
      Schema = mongoose.Schema,
        Util = require("../util/functions");

var HotelSchema = new Schema({
  name: {
    type: String,
    required: 'name required'
  },
  stars: {
    type: String,
    required: 'stars required'
  },
  price: {
    type: Number,
    required: 'number required'
  },
  image: {
    type: String,
    required: 'file name image required'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  amenities: {
    type: [{
      type: String
    }]
  }
});

/* popula una cooleccion con data */
HotelSchema.statics.initHotel = function(Hotels) {
  Util.loadData(function(data){
    Hotels.remove({}, function(err) {
      data.forEach(function(val) {
        Hotels.create(val)
      })
    })
  })
}

module.exports = mongoose.model('Hotels', HotelSchema);
'use strict';
module.exports = function(app) {
  var controller = require('../controllers/apiController');

/*
    HTTP Verb   Operation
    GET           Read
    POST          Create
    PUT           Update
    DELETE        Delete
*/

  app.route('/api/items')
    .get(controller.showItems)
  app.route('/api/items/:id')
    .get(controller.showItem);
};

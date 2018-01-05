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

  app.route('/listar')
    .get(controller.listar)

  app.route('/filtrar')
    .post(controller.filtrar);

  app.route('/guardar')
    .post(controller.guardar)
};



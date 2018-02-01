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

  app.route('/actualizar/:id')
    .put(controller.actualizar)

  app.route('/eliminar/:id')
    .delete(controller.eliminar)
};





// tvshows.route('/tvshows')
//   .get(TVShowCtrl.findAllTVShows)
//   .post(TVShowCtrl.addTVShow);

// tvshows.route('/tvshows/:id')
//   .get(TVShowCtrl.findById)
//   .put(TVShowCtrl.updateTVShow)
//   .delete(TVShowCtrl.deleteTVShow);




'use strict';
const request = require('request');

/*
* consulta el recurso sites/MLA/search?limit=4&q= de la API de ML y devuele los resultados parciados
*/
exports.showItems = (req, res) => {
  var query = req.query.q

  request({
    'url':'https://api.mercadolibre.com/sites/MLA/search?limit=4&q=' + query,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = body;

        var results = {
          author: {
            name: process.env.AUTHORNAME || null,
            lastname: process.env.AUTORLASTNAME || null
          },
          categories: null, // String
          items: []
        }
        data = JSON.parse(data)

        let categories;
        data.filters.forEach((val, key) => {
          if (val.id === "category") {
            categories = val.values.map((val, key) => {
              return val.name
            })
          }
        })

        results.categories = categories
        for(var i in data.results) {

          let price = data.results[i].price,
              decimal = null;
          // separa decimales del precio
          if (!Number.isInteger(price)) {
            let split = splitDecimal(price)
            price = split[0]
            decimal = split[1]
          }

          let ext, img;
          // reemplaza la I en la url de la img thumb por la C
          if (typeof data.results[i].thumbnail !== 'undefined') {
            ext = data.results[i].thumbnail.slice(-4)
            img = data.results[i].thumbnail.match(/.*(?=\.)/g)
            img = img[0].slice(0, -1)
            img = img + "C" + ext
          }

          results.items.push({
            id: data.results[i].id,
            title: data.results[i].title,
            price: {
              currency: data.results[i].currency_id,
              amount: price,
              decimals: decimal
            },
            picture: img || null,
            condition: data.results[i].condition,
            free_shipping: data.results[i].shipping.free_shipping,
          })
        }

        res.send(results);
      } else {
        res.send(error);
      }
    }
  );
}

/*
* consulta los recursos /items/:id y /items/:id/description de la API de ML y devuelve los resultados parseados
*/
exports.showItem = (req, res) => {

  const id = req.params.id
  getItem()
  .then(getItemDetail)

  function getItem() {
    return new Promise((fulfill, reject) => {
      request({
        'url':'https://api.mercadolibre.com/items/' + id,
        },
        function (error, response, body) {
          if (!error && response.statusCode == 200) {
            let data = body;
            data = JSON.parse(data)

            let price = data.price,
                decimal = null;
            if (!Number.isInteger(price)) {
              let split = splitDecimal(price)
              price = split[0]
              decimal = split[1]
            }

            let result = {
              author: {
                name: process.env.AUTHORNAME || null,
                lastname: process.env.AUTORLASTNAME || null
              },
              item: {
                id: data.id,
                title: data.title,
                price: {
                  currency: data.currency_id,
                  amount: price,
                  decimals: decimal
                },
                picture: data.pictures[0].url,
                condition: data.condition,
                free_shipping: data.shipping.free_shipping,
                sold_quantity: data.sold_quantity,
                description: null
              }
            }

            fulfill(result);
          } else {
            res.send(error);
          }
      })
    });
  }

  function getItemDetail(result) {
    request({
      'url':'https://api.mercadolibre.com/items/' + result.item.id + '/description',
      },
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          let data = body;
          data = JSON.parse(data)
          result.item.description = data.plain_text
          res.send(result);
        } else {
          res.send(error);
        }
    })
  }
}


function splitDecimal(val) {
  val = val.toString()
  val = val.split(".")
  return val
}

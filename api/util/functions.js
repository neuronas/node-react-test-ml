var fs = require("fs");
var data = [];

/*
* obtiene objeto json de un archivo
*/
exports.loadData = function loadData(res) {
  fs.readFile("./data/data.json", function(err, _data){
    if (err)
      res.send(err);
    var data = JSON.parse(_data)
    res(data)
  });
}

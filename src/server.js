var express = require('express');
var bodyParser = require('body-parser');

class Server {
  constructor(routes) {
    this._app = express();
    this._app.use('/', routes.router);
  }

  start() {
    var port = 8888;
    this._app.listen(port, function() {
      console.log('Listening to HTTP on Port', port);
    });
  }
}

module.exports = Server;


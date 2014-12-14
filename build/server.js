"use strict";

var express = require("express");
var bodyParser = require("body-parser");

var Server = (function () {
  var Server = function Server(routes) {
    this._app = express();
    this._app.use("/", routes.router);
  };

  Server.prototype.start = function () {
    var port = 8888;
    this._app.listen(port, function () {
      console.log("Listening to HTTP on Port", port);
    });
  };

  return Server;
})();

module.exports = Server;
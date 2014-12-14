"use strict";

var express = require("express");
var bodyParser = require("body-parser");

var Server = (function () {
  var Server = function Server() {
    this._app = express();
  };

  Server.prototype.use = function (router) {
    this._app.use("/", router);
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
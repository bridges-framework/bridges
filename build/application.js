"use strict";

var Server = require(__dirname + "/server");

var Application = (function () {
  var Application = function Application() {};

  Application.prototype.start = function () {
    var routes = require(process.cwd() + "/build/config/routes");
    var server = new Server();

    //server.use(routes);
    server.start();
  };

  return Application;
})();

module.exports = Application;
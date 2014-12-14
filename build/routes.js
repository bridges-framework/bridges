"use strict";

var express = require("express");
var requireAll = require("require-all-to-camel");
var controllers = requireAll(process.cwd() + "/build/app/controllers");
var Routes = (function () {
  var Routes = function Routes() {
    this.router = new express.Router();
  };

  Routes.draw = function (connect) {
    var routes = new Routes();
    connect.apply(routes);
    return routes;
  };

  Routes.prototype.action = function (action) {
    var controllerName = action.split("#")[0] + "Controller";
    var actionName = action.split("#")[1];

    return function (request, response, error) {
      var controller = new controllers[controllerName](request, response, error);
      controller[actionName]();
    };
  };

  Routes.prototype.get = function (route, action) {
    this.router.get(route, this.action(action));
  };

  Routes.prototype.post = function (route, action) {
    this.router.post(route, this.action(action));
  };

  Routes.prototype.put = function (route, action) {
    this.router.put(route, this.action(action));
  };

  Routes.prototype["delete"] = function (route, action) {
    this.router["delete"](route, this.action(action));
  };

  return Routes;
})();

module.exports = Routes;
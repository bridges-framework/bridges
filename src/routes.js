var express = require('express');
var requireAll = require('require-all-to-camel');
var controllers = requireAll(process.cwd()+'/build/app/controllers');
class Routes {

  static draw(connect) {
    var routes = new Routes();
    connect.apply(routes);
    return routes;
  }

  constructor() {
    this.router = new express.Router();
  }

  action(action) {
    var controllerName = action.split('#')[0]+'Controller';
    var actionName = action.split('#')[1];

    return function(request, response, error) {
      var controller = new controllers[controllerName](request, response, error);
      controller[actionName]();
    }
  }

  get(route, action) {
    this.router.get(route, this.action(action));
  }

  post(route, action) {
    this.router.post(route, this.action(action));
  }

  put(route, action) {
    this.router.put(route, this.action(action));
  }

  delete(route, action) {
    this.router.delete(route, this.action(action));
  }
}

module.exports = Routes;


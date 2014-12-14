var express = require('express');
var requireAll = require('require-all-to-camel');
var controllers = requireAll(process.cwd()+'/build/app/controllers');

class Routes {

  static draw(drawing) {
    return new Routes();
  }

  constructor() {
    this.router = new express.Router();
  }

  action(action) {
    var controller = action.split('#')[0];
    var action = action.split('#')[1];
    return controllers[controller][action];
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


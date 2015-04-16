'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var express = require('express');
var requireAll = require('require-all-to-camel');
var controllers = requireAll(process.cwd() + '/build/app/controllers');

var Routes = (function () {
  function Routes() {
    _classCallCheck(this, Routes);

    this.router = new express.Router();
  }

  _createClass(Routes, [{
    key: 'action',
    value: (function (_action) {
      function action(_x) {
        return _action.apply(this, arguments);
      }

      action.toString = function () {
        return _action.toString();
      };

      return action;
    })(function (action) {
      var controllerName = action.split('#')[0] + 'Controller';
      var actionName = action.split('#')[1];

      return function (request, response, error) {
        var controller = new controllers[controllerName](request, response, error);
        controller[actionName]();
      };
    })
  }, {
    key: 'get',
    value: function get(route, action) {
      this.router.get(route, this.action(action));
    }
  }, {
    key: 'post',
    value: function post(route, action) {
      this.router.post(route, this.action(action));
    }
  }, {
    key: 'put',
    value: function put(route, action) {
      this.router.put(route, this.action(action));
    }
  }, {
    key: 'delete',
    value: function _delete(route, action) {
      this.router['delete'](route, this.action(action));
    }
  }], [{
    key: 'draw',
    value: function draw(connect) {
      var routes = new Routes();
      connect.apply(routes);
      return routes;
    }
  }]);

  return Routes;
})();

module.exports = Routes;
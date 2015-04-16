'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var express = require('express');
var bodyParser = require('body-parser');

var Server = (function () {
  function Server(routes) {
    _classCallCheck(this, Server);

    this._app = express();
    this._app.use('/', routes.router);
  }

  _createClass(Server, [{
    key: 'start',
    value: function start() {
      var port = 8888;
      this._app.listen(port, function () {
        console.log('Listening to HTTP on Port', port);
      });
    }
  }]);

  return Server;
})();

module.exports = Server;
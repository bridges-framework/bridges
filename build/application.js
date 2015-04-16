'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var Server = require(__dirname + '/server');

var Application = (function () {
  function Application() {
    _classCallCheck(this, Application);
  }

  _createClass(Application, [{
    key: 'start',
    value: function start() {
      var routes = require(process.cwd() + '/build/config/routes');
      var server = new Server(routes);
      server.start();
    }
  }]);

  return Application;
})();

module.exports = Application;
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var GeneratorBase = require(__dirname + '/base');
var fs = require('fs');

var ControllerGenerator = (function (_GeneratorBase) {
  function ControllerGenerator() {
    _classCallCheck(this, ControllerGenerator);

    if (_GeneratorBase != null) {
      _GeneratorBase.apply(this, arguments);
    }
  }

  _inherits(ControllerGenerator, _GeneratorBase);

  _createClass(ControllerGenerator, [{
    key: 'run',
    value: function run(name) {
      var controllerPath = '/source/app/controllers/' + name + '_controller.js';
      var testPath = '/source/test/integration/' + name + '_test.js';

      if (fs.existsSync(controllerPath)) {
        console.log('Error: Controller named ' + name + ' already exists at ', controllerPath);
      } else {
        this.template('/controller.js', controllerPath)();
        this.template('/controller_test.js', testPath)();
      }
    }
  }]);

  return ControllerGenerator;
})(GeneratorBase);

module.exports = ControllerGenerator;
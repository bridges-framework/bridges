'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var GeneratorBase = require(__dirname + '/base');
var fs = require('fs');

var ModelGenerator = (function (_GeneratorBase) {
  function ModelGenerator() {
    _classCallCheck(this, ModelGenerator);

    if (_GeneratorBase != null) {
      _GeneratorBase.apply(this, arguments);
    }
  }

  _inherits(ModelGenerator, _GeneratorBase);

  _createClass(ModelGenerator, [{
    key: 'run',
    value: function run(name) {
      var modelPath = '/source/app/models/' + name + '.js';
      var migrationPath = '/source/db/migrations/' + this.timestamp(name) + '.js';

      if (fs.existsSync(modelPath)) {
        console.log('Error: Model named ' + name + ' already exists at ', modelPath);
      } else {
        this.template('/model.js', modelPath)();
        this.template('/migration.js', migrationPath)();
        this.template('/model_test.js', '/source/test/models/' + name + '_test.js')();
      }
    }
  }, {
    key: 'timestamp',
    value: function timestamp(name) {
      return new Date().getTime() + '-' + name;
    }
  }]);

  return ModelGenerator;
})(GeneratorBase);

module.exports = ModelGenerator;
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var fs = require('fs');

var Generator = (function () {
  function Generator(projectPath) {
    _classCallCheck(this, Generator);

    this._source = __dirname + '/../../templates';
    this._projectPath = projectPath;
  }

  _createClass(Generator, [{
    key: 'source',
    get: function () {
      return this._source;
    }
  }, {
    key: 'projectPath',
    get: function () {
      return this._projectPath;
    }
  }, {
    key: 'directory',
    value: function directory(path) {
      console.log('mkdir', path);
      fs.mkdirSync(this.projectPath + path);
    }
  }, {
    key: 'template',
    value: function template(source, target) {
      var _this = this;
      return function (params) {
        try {
          _this.copy(__dirname + '/../../templates' + source, _this.projectPath + target);
          console.log('template', target);
        } catch (error) {
          console.log('error', error);
        }
      };
    }
  }, {
    key: 'copy',
    value: function copy(source, target) {
      fs.createReadStream(source).pipe(fs.createWriteStream(target));
    }
  }]);

  return Generator;
})();

module.exports = Generator;
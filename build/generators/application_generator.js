'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var GeneratorBase = require(__dirname + '/base');
var spawn = require('child_process').spawn;

var ApplicationGenerator = (function (_GeneratorBase) {
  function ApplicationGenerator() {
    _classCallCheck(this, ApplicationGenerator);

    if (_GeneratorBase != null) {
      _GeneratorBase.apply(this, arguments);
    }
  }

  _inherits(ApplicationGenerator, _GeneratorBase);

  _createClass(ApplicationGenerator, [{
    key: 'run',
    value: function run() {
      console.log('generating bridges app');
      this.directory('/');
      this.template('/package.json', '/package.json')();
      this.template('/README.md', '/README.md')();
      this.template('/gitignore', '/.gitignore')();

      this.directory('/db');
      this.directory('/db/migrations');

      this.directory('/test');
      this.directory('/test/models');
      this.directory('/test/integration');

      this.directory('/models');

      this.directory('/lib');

      this.directory('/controllers');
      this.template('/controllers/home.js', '/controllers/home.js')();

      this.directory('/processes');
      this.template('/processes/server.js', '/processes/server.js')();

      this.directory('/config');
      this.template('/knexfile.js', '/config/knexfile.js')();
      this.directory('/config/initializers');

      this.template('/config/database.js', '/config/database.js')();
      this.template('/config/routes.js', '/config/routes.js')();
      this.template('/config/bridges.js', '/config/bridges.js')();

      this.install();
    }
  }, {
    key: 'install',
    value: function install() {
      var _this = this;
      console.log('Running npm install...');
      setTimeout(function () {
        var install = spawn('npm', ['install'], { cwd: _this.projectPath });
        install.stdout.pipe(process.stdout);
        install.stderr.pipe(process.stdout);
        install.on('close', function (code) {
          console.log('Installation complete');
          process.exit(0);
        });
      }, 1000);
    }
  }]);

  return ApplicationGenerator;
})(GeneratorBase);

module.exports = ApplicationGenerator;
var GeneratorBase = require(__dirname+'/base');
var spawn = require('child_process').spawn;

class ApplicationGenerator extends GeneratorBase {

  run() {
    console.log('generating bridges app');
    this.directory('/');
    this.template('/bridges.js',   '/bridges.js')();
    this.template('/package.json', '/package.json')();
    this.template('/gulpfile.js',  '/gulpfile.js')();
    this.template('/gitignore',   '/.gitignore')();

    this.directory('/db');
    this.directory('/db/migrations');

    this.directory('/test');
    this.directory('/test/models');
    this.directory('/test/integration');

    this.directory('/models');
    this.template('/models/index.js',   '/models/index.js')();

    this.directory('/lib');
    this.template('/lib/index.js',   '/lib/index.js')();

    this.directory('/controllers');
    this.template('/controllers/home.js',   '/controllers/home.js')();

    this.directory('/processes');
    this.template('/processes/server.js', '/processes/server.js')();

    this.directory('/config');
    this.template('/knexfile.js', '/config/knexfile.js')();
    this.directory('/config/initializers');

    this.template('/config/database.js',  '/config/database.js')();
    this.template('/config/routes.js',    '/config/routes.js')();

    this.install();
  }
  
  install() {
    var _this = this;
    console.log('Running npm install...');
    setTimeout(function() {
      var install = spawn('npm', ['install'], {cwd: _this.projectPath});
      install.stdout.pipe(process.stdout);
      install.stderr.pipe(process.stdout);
      install.on('close', function(code) {
        console.log('Installation complete');
        process.exit(0);
      });
    }, 1000);
  }
}

module.exports = ApplicationGenerator;

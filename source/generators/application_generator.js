var Generator = require(__dirname+'/');
var spawn = require('child_process').spawn;

class ApplicationGenerator extends Generator {

  run() {
    console.log('generating bridges app');
    this.directory('');
    this.directory('/db');
    this.directory('/db/migrations');
    this.directory('/test');
    this.directory('/test/models');
    this.directory('/test/integration');
    this.directory('/app');
    this.directory('/app/models');
    this.directory('/app/lib');
    this.directory('/app/controllers');
    this.directory('/config');
    this.directory('/config/initializers');
    this.file('/config/bridges.js');
    this.file('/package.json');
    this.file('/.gitignore');
    this.install();
  }
  
  install() {
    console.log('Running npm install...');
    setTimeout(function() {
      var install = spawn('npm', ['install'], {cwd: projectDirectory});
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

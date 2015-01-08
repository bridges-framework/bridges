#!/usr/local/bin/node
var fs = require('fs');

var program = require('commander');
var Console = require('bridges-console');
var spawn = require('child_process').spawn;
var ModelGenerator = require(__dirname+'/build/generators/model_generator.js');
var ApplicationGenerator = require(__dirname+'/build/generators/application_generator.js');
var ControllerGenerator = require(__dirname+'/build/generators/controller_generator.js');

program
  .version('0.1.1')
  .option('-d, --database', 'database')

program
  .command('generate <generator> <name>')
  .action(function(generator, name) {
    switch(generator) {
      case 'model':
        var modelGenerator = new ModelGenerator(process.cwd());
        modelGenerator.run(name);
        break;
      case 'controller':
        var controllerGenerator = new ControllerGenerator(process.cwd());
        controllerGenerator.run(name);
        break;
      default:
        console.log('unsupported generator type:', type);
    }
  });

program
  .command('new <name>')
  .action(function(name) {
    var applicationGenerator = new ApplicationGenerator(process.cwd()+'/'+name);
    applicationGenerator.run();
  });

program
  .command('start')
  .action(function() {
    var application = spawn('npm', ['run', 'start']);
    application.stdout.pipe(process.stdout);
    application.stderr.pipe(process.stdout);
    application.on('close', function(code) {
      console.log('Bridges Application Stopping...');
      process.exit(0);
    });
  });

program
  .command('console')
  .action(function() {
    var path = process.cwd()+'/src/config/bridges.js';
    if (fs.existsSync(path) && fs.statSync(path).isFile()){
      var build = spawn('npm', ['run', 'build']);
      build.stdout.pipe(process.stdout);
      build.stderr.pipe(process.stdout);
      build.on('close', function(code) {
        var repl = new Console({
          prompt: 'bridges console',
          loadDirectories: [
            process.cwd()+'/build/app/models',
            process.cwd()+'/build/app/lib'
          ]
        }); 
        repl.start();
      });
    } else {
      console.log('current directory is not a Bridges application');
    }
  });

program.parse(process.argv);


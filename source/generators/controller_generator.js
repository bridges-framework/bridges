var GeneratorBase = require(__dirname+'/base');
var fs = require('fs');

class ControllerGenerator extends GeneratorBase {

  run(name) {
    var controllerPath = '/source/app/controllers/'+name+'_controller.js';
    var testPath = '/source/test/integration/'+name+'_test.js';

    if (fs.existsSync(controllerPath)) {
      console.log('Error: Controller named '+name+' already exists at ', controllerPath);
    } else {
      this.template('/controller.js', controllerPath)();
      this.template('/controller_test.js', testPath)();
    }
  }
}

module.exports = ControllerGenerator;


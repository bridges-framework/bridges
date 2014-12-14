var GeneratorBase = require(__dirname+'/base');
var fs = require('fs');

class ModelGenerator extends GeneratorBase {

  run(name) {
    var modelPath = '/source/app/models/'+name+'.js';
    var migrationPath = '/source/db/migrations/'+this.timestamp(name)+'.js'

    if (fs.existsSync(modelPath)) {
      console.log('Error: Model named '+name+' already exists at ', modelPath);
    } else {
      this.template('/model.js', modelPath)();
      this.template('/migration.js', migrationPath)();
      this.template('/model_test.js', '/source/test/models/'+name+'_test.js')();
    }
  }

  timestamp(name) {
    return (new Date()).getTime()+'-'+name;
  }
}

module.exports = ModelGenerator;


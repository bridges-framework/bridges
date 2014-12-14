var Generator = require(__dirname+'/');
var fs = require('fs');

class ModelGenerator extends Generator {

  run() {
    var modelPath = process.cwd()+'/app/models/'+this.name+'.js';

    if (fs.existsSync(modelPath)) {
      console.log('Error: Model named '+this.name+' already exists at ', modelPath);
    } else {
      this.copy(__dirname+'/../templates/model.js', modelPath);
      console.log('create', modelPath);
      var migrationPath = process.cwd()+'/db/migrations/'+(new Date()).getTime()+'-'+this.name+'.js';
      this.copy(__dirname+'/../templates/migration.js', migrationPath);
      console.log('create', migrationPath);

      var modelTestPath = process.cwd()+'/test/models/'+this.name+'_test.js'
      this.copy(__dirname+'/../templates/model_test.js', modelTestPath);
      console.log('create', modelTestPath);
    }
  }
}

module.exports = ModelGenerator;


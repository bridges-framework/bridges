var fs = require('fs');

class Generator {
  constructor(projectPath) {
    this._source = __dirname+'/../../templates';
    this._projectPath = projectPath;
  }

  get source() {
    return this._source; 
  }

  get projectPath() {
    return this._projectPath;
  }

  directory(path) {
    console.log('mkdir', path);
    fs.mkdirSync(this.projectPath+path)
  }

  template(source, target) {
    var _this = this;
    return function(params) {
      try {
        _this.copy(__dirname+'/../../templates'+source, _this.projectPath+target);
        console.log('template', target);
      } catch(error) {
        console.log('error', error);
      }
    }
  }

  copy(source, target) {
    fs.createReadStream(source).pipe(fs.createWriteStream(target));
  }
}

module.exports = Generator;


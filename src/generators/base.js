var fs = require('fs');

class Generator {
  constructor(projectPath) {
    this._source = __dirname+'/../../templates';
    this._target = projectPath+'/src';
    this._projectPath = projectPath;
  }

  get source() {
    return this._source; 
  }

  get target() {
    return this._target;
  }

  get projectPath() {
    return this._projectPath;
  }

  directory(path) {
    fs.mkdirSync(this.projectPath+path)
    console.log('mkdir', path);
  }

  template(source, target) {
    var _this = this;
    return function(params) {
      _this.copy(__dirname+'/../../templates'+source, _this.projectPath+target);
      console.log('template', target);
    }
  }

  copy(source, target) {
    fs.createReadStream(source).pipe(fs.createWriteStream(target));
  }
}

module.exports = Generator;


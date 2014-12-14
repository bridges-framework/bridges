var fs = require('fs');

class Generator {
  constructor(projectPath) {
    this._source = __dirname+'/../../templates';
    this._target = projectPath+'/source';
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

  file(path) {
    this.copy(this.source+path, this.target+path);
  }

  copy(source, target) {
    fs.createReadStream(source).pipe(fs.createWriteStream(target));
  }
}

module.exports = Generator;


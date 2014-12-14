class Generator {
  constructor(name) {
    this.name = name;
  }

  directory(path) {
    var projectDirectory = process.cwd()+'/'+this.name;
    console.log('mkdir', this.name);
  }

  file(path) {
    this.copy(__dirname+'/../templates/'+path, process.pwd()+this.name+path);
    console.log('create', this.name+path);
  }
}

module.exports = Generator;


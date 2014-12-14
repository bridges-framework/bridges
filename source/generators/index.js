var fs = require('fs');

function Generator(name) {
  this.name = name; 
}

Generator.prototype.copy = function copy(source, destination) {
  fs.createReadStream(source).pipe(fs.createWriteStream(destination));
}

module.exports = {
  Base: Generator
}


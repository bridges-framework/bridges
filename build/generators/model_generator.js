"use strict";

var Generator = require(__dirname + "/");
var fs = require("fs");

function ModelGenerator(name) {
  this.name = name;
  Generator.Base.call(this, name);
}

ModelGenerator.prototype = Object.create(Generator.Base.prototype);
ModelGenerator.prototype.constructor = ModelGenerator;

ModelGenerator.prototype.run = function () {
  var _this = this;

  var modelPath = process.cwd() + "/app/models/" + _this.name + ".js";

  if (fs.existsSync(modelPath)) {
    console.log("Error: Model named " + _this.name + " already exists at ", modelPath);
  } else {
    _this.copy(__dirname + "/../templates/model.js", modelPath);
    console.log("create", modelPath);

    var migrationPath = process.cwd() + "/db/migrations/" + (new Date()).getTime() + "-" + _this.name + ".js";
    _this.copy(__dirname + "/../templates/migration.js", migrationPath);
    console.log("create", migrationPath);

    var modelTestPath = process.cwd() + "/test/models/" + _this.name + "_test.js";
    _this.copy(__dirname + "/../templates/model_test.js", modelTestPath);
    console.log("create", modelTestPath);
  }
};

ModelGenerator.constructor = ModelGenerator;

module.exports = ModelGenerator;
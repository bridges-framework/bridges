"use strict";

var _extends = function (child, parent) {
  child.prototype = Object.create(parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  child.__proto__ = parent;
};

var GeneratorBase = require(__dirname + "/base");
var fs = require("fs");

var ModelGenerator = (function (GeneratorBase) {
  var ModelGenerator = function ModelGenerator() {
    GeneratorBase.apply(this, arguments);
  };

  _extends(ModelGenerator, GeneratorBase);

  ModelGenerator.prototype.run = function () {
    var modelPath = process.cwd() + "/app/models/" + this.name + ".js";

    if (fs.existsSync(modelPath)) {
      console.log("Error: Model named " + this.name + " already exists at ", modelPath);
    } else {
      this.copy(__dirname + "/../templates/model.js", modelPath);
      console.log("create", modelPath);
      var migrationPath = process.cwd() + "/db/migrations/" + (new Date()).getTime() + "-" + this.name + ".js";
      this.copy(__dirname + "/../templates/migration.js", migrationPath);
      console.log("create", migrationPath);

      var modelTestPath = process.cwd() + "/test/models/" + this.name + "_test.js";
      this.copy(__dirname + "/../templates/model_test.js", modelTestPath);
      console.log("create", modelTestPath);
    }
  };

  return ModelGenerator;
})(GeneratorBase);

module.exports = ModelGenerator;
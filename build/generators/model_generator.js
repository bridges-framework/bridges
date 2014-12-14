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

  ModelGenerator.prototype.run = function (name) {
    var modelPath = "/source/app/models/" + name + ".js";
    var migrationPath = "/source/db/migrations/" + this.timestamp(name) + ".js";

    if (fs.existsSync(modelPath)) {
      console.log("Error: Model named " + name + " already exists at ", modelPath);
    } else {
      this.template("/model.js", modelPath)();
      this.template("/migration.js", migrationPath)();
      this.template("/model_test.js", "/source/test/models/" + name + "_test.js")();
    }
  };

  ModelGenerator.prototype.timestamp = function (name) {
    return (new Date()).getTime() + "-" + name;
  };

  return ModelGenerator;
})(GeneratorBase);

module.exports = ModelGenerator;
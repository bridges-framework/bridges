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

var ControllerGenerator = (function (GeneratorBase) {
  var ControllerGenerator = function ControllerGenerator() {
    GeneratorBase.apply(this, arguments);
  };

  _extends(ControllerGenerator, GeneratorBase);

  ControllerGenerator.prototype.run = function (name) {
    var controllerPath = "/source/app/controllers/" + name + "_controller.js";
    var testPath = "/source/test/integration/" + name + "_test.js";

    if (fs.existsSync(controllerPath)) {
      console.log("Error: Controller named " + name + " already exists at ", controllerPath);
    } else {
      this.template("/controller.js", controllerPath)();
      this.template("/controller_test.js", testPath)();
    }
  };

  return ControllerGenerator;
})(GeneratorBase);

module.exports = ControllerGenerator;
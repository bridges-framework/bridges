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
var spawn = require("child_process").spawn;

var ApplicationGenerator = (function (GeneratorBase) {
  var ApplicationGenerator = function ApplicationGenerator() {
    GeneratorBase.apply(this, arguments);
  };

  _extends(ApplicationGenerator, GeneratorBase);

  ApplicationGenerator.prototype.run = function () {
    console.log("generating bridges app");
    this.directory("/");
    this.directory("/source");
    this.directory("/source/db");
    this.directory("/source/db/migrations");
    this.directory("/source/test");
    this.directory("/source/test/models");
    this.directory("/source/test/integration");
    this.directory("/source/app");
    this.directory("/source/app/models");
    this.directory("/source/app/lib");
    this.directory("/source/app/controllers");
    this.directory("/source/config");
    this.directory("/source/config/initializers");
    this.file("/config/bridges.js");
    this.copy(__dirname + "/../../templates/package.json", this.projectPath + "/package.json");
    this.copy(__dirname + "/../../templates/.gitignore", this.projectPath + "/.gitignore");
    this.install();
  };

  ApplicationGenerator.prototype.install = function () {
    var _this = this;
    console.log("Running npm install...");
    setTimeout(function () {
      var install = spawn("npm", ["install"], { cwd: _this.projectPath });
      install.stdout.pipe(process.stdout);
      install.stderr.pipe(process.stdout);
      install.on("close", function (code) {
        console.log("Installation complete");
        process.exit(0);
      });
    }, 1000);
  };

  return ApplicationGenerator;
})(GeneratorBase);

module.exports = ApplicationGenerator;
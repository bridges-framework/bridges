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

var Generator = require(__dirname + "/");
var spawn = require("child_process").spawn;

var ApplicationGenerator = (function (Generator) {
  var ApplicationGenerator = function ApplicationGenerator() {
    Generator.apply(this, arguments);
  };

  _extends(ApplicationGenerator, Generator);

  ApplicationGenerator.prototype.run = function () {
    console.log("generating bridges app");
    this.directory("");
    this.directory("/db");
    this.directory("/db/migrations");
    this.directory("/test");
    this.directory("/test/models");
    this.directory("/test/integration");
    this.directory("/app");
    this.directory("/app/models");
    this.directory("/app/lib");
    this.directory("/app/controllers");
    this.directory("/config");
    this.directory("/config/initializers");
    this.file("/config/bridges.js");
    this.file("/package.json");
    this.file("/.gitignore");
    this.install();
  };

  ApplicationGenerator.prototype.install = function () {
    console.log("Running npm install...");
    setTimeout(function () {
      var install = spawn("npm", ["install"], { cwd: projectDirectory });
      install.stdout.pipe(process.stdout);
      install.stderr.pipe(process.stdout);
      install.on("close", function (code) {
        console.log("Installation complete");
        process.exit(0);
      });
    }, 1000);
  };

  return ApplicationGenerator;
})(Generator);

module.exports = ApplicationGenerator;
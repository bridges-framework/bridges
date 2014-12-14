"use strict";

var fs = require("fs");

var Generator = (function () {
  var Generator = function Generator(name) {
    this.name = name;
  };

  Generator.prototype.directory = function (path) {
    var projectDirectory = process.cwd() + "/" + this.name;
    console.log("mkdir", this.name);
  };

  Generator.prototype.file = function (path) {
    this.copy(__dirname + "/../templates/" + path, process.pwd() + this.name + path);
    console.log("create", this.name + path);
  };

  return Generator;
})();

module.exports = {
  Base: Generator
};
"use strict";

var Generator = require(__dirname + "/");
var fs = require("fs");
var spawn = require("child_process").spawn;

function ApplicationGenerator(name) {
  Generator.Base.call(this, name);
}

ApplicationGenerator.prototype = Object.create(Generator.Base.prototype);
ApplicationGenerator.prototype.constructor = ApplicationGenerator;

ApplicationGenerator.prototype.run = function () {
  var name = this.name;

  var projectDirectory = process.cwd() + "/" + name;
  console.log("generating bridges app");
  fs.mkdirSync(projectDirectory);
  console.log("mkdir", name);
  fs.mkdirSync(name + "/config");
  console.log("mkdir", name + "/config");
  this.copy(__dirname + "/../templates/config/bridges.js", projectDirectory + "/config/bridges.js");
  console.log("create", name + "/config/bridges.js");
  fs.mkdirSync(name + "/config/initializers");
  console.log("mkdir", name + "/config/initializers");
  fs.mkdirSync(projectDirectory + "/db");
  console.log("mkdir", name + "/db");
  fs.mkdirSync(projectDirectory + "/db/migrations");
  console.log("mkdir", name + "/db/migrations");
  fs.mkdirSync(projectDirectory + "/test");
  console.log("mkdir", name + "/test");
  fs.mkdirSync(projectDirectory + "/test/models");
  console.log("mkdir", name + "/test/models");
  fs.mkdirSync(projectDirectory + "/test/integration");
  console.log("mkdir", name + "/test/integration");
  fs.mkdirSync(projectDirectory + "/app");
  console.log("mkdir", name + "/app");
  fs.mkdirSync(projectDirectory + "/app/models");
  console.log("mkdir", name + "/app/models");
  fs.mkdirSync(projectDirectory + "/app/controllers");
  console.log("mkdir", name + "/app/controllers");
  fs.mkdirSync(projectDirectory + "/app/lib");
  console.log("mkdir", name + "/app/lib");
  this.copy(__dirname + "/../templates/package.json", projectDirectory + "/package.json");
  console.log("create", name + "/package.json");
  this.copy(__dirname + "/../templates/.gitignore", projectDirectory + "/.gitignore");
  console.log("create", name + "/.gitignore");

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

module.exports = ApplicationGenerator;
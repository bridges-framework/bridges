"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var fs = require("fs");

var Generator = (function () {
  var Generator = function Generator(projectPath) {
    this._source = __dirname + "/../../templates";
    this._target = projectPath + "/source";
    this._projectPath = projectPath;
  };

  Generator.prototype.directory = function (path) {
    fs.mkdirSync(this.projectPath + path);
    console.log("mkdir", path);
  };

  Generator.prototype.template = function (source, target) {
    var _this = this;
    return function (params) {
      _this.copy(__dirname + "/../../templates" + source, _this.projectPath + target);
      console.log("template", target);
    };
  };

  Generator.prototype.copy = function (source, target) {
    fs.createReadStream(source).pipe(fs.createWriteStream(target));
  };

  _classProps(Generator, null, {
    source: {
      get: function () {
        return this._source;
      }
    },
    target: {
      get: function () {
        return this._target;
      }
    },
    projectPath: {
      get: function () {
        return this._projectPath;
      }
    }
  });

  return Generator;
})();

module.exports = Generator;
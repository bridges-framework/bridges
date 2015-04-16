"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var ActionController = (function () {
  function ActionController(request, response, error) {
    _classCallCheck(this, ActionController);

    this._request = request;
    this._response = response;
    this._error = error;
  }

  _createClass(ActionController, [{
    key: "request",
    get: function () {
      return this._request;
    }
  }, {
    key: "req",
    get: function () {
      return this._request;
    }
  }, {
    key: "response",
    get: function () {
      return this._response;
    }
  }, {
    key: "res",
    get: function () {
      return this._response;
    }
  }]);

  return ActionController;
})();

module.exports = ActionController;
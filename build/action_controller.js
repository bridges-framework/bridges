"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var ActionController = (function () {
  var ActionController = function ActionController(request, response, error) {
    this._request = request;
    this._response = response;
    this._error = error;
  };

  _classProps(ActionController, null, {
    request: {
      get: function () {
        return this._request;
      }
    },
    req: {
      get: function () {
        return this._request;
      }
    },
    response: {
      get: function () {
        return this._response;
      }
    },
    res: {
      get: function () {
        return this._response;
      }
    }
  });

  return ActionController;
})();

module.exports = ActionController;
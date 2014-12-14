class ActionController {
  
  constructor(request, response, error) {
    this._request = request;
    this._response = response;
    this._error = error;
  }

  get request() {
    return this._request;
  }

  get req() {
    return this._request;
  }
  
  get response() {
    return this._response;
  }
  get res() {
    return this._response;
  }
}

module.exports = ActionController;


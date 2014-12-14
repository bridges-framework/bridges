var Bridges = require('bridges');

class ApplicationController extends Bridges.ActionController {

  index() {
    this.response.status(200).send({ welcome: "Hello from Bridges!" });
  }
}

module.exports = ApplicationController;


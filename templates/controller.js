var ApplicationController = require(__dirname+'/application_controller');

class MessagesController extends ApplicationController {
  
  create() {
    this.response.send({ bitpay: 'message' });
  }

}

module.exports = MessagesController;

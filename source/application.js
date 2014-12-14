var Server = require(__dirname+'/server');

class Application {
  
  start() {
    var routes = require(process.cwd()+'/build/config/routes');
    var server = new Server(routes);
    server.start();
  }
}

module.exports = Application;


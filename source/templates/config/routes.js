var Bridges = require('bridges');

module.exports = Bridges.Routes.draw(function() {
  this.get('/markets', 'markets#index');
  this.post('/markets', 'markets#create');
});


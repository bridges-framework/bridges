var database = require(__dirname+'/../../config/database.js');
var bookshelf = require('bookshelf')(database);

var Model = bookshelf.Model.extend({
  tableName: 'models'
});

module.exports = Model

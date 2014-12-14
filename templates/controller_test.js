require(__dirname+'/../test_helper');
var assert = require('assert');
var http = require('supertest');

describe('A Controller', function() {

  it('the truth should last over time', function(done) {
    http.get('/messages').end(function(error, response) {
      assert(response.body.messages);
      done();
    });
  });
});


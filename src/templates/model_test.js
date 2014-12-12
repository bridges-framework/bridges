require(__dirname+'/../test_helper');

describe('A Database Model', function() {

  before(function() {
    theTruth = true;
  }); 

  it('the truth should be true', function() {
    assert(theTruth);
  }); 

  it('the truth should last over time', function(done) {
    // call done() when asynchronous tests complete
    setTimeout(function() {
      assert(theTruth);
      done();
    }, 100); 
  }); 
});

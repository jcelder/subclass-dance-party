describe('twirlingDancer', function() {
  var newTwirlingDancer;
  beforeEach(function() {
    newTwirlingDancer = new TwirlingDancer();
  });
  it('should have the class name dancer__twirling', function() {
    var expectedClassName = 'dancer__twirling';
    expect(newTwirlingDancer.$node.hasClass(expectedClassName)).to.be.true;
  });
});
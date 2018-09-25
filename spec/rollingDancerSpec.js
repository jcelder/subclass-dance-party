describe('rollingDancer', function() {
  var newRollingDancer;
  beforeEach(function() {
    newRollingDancer = new RollingDancer();
  });
  it('should add a class of dancer__rolling', function() {
    var expectedClassName = 'dancer__rolling';
    expect(newRollingDancer.$node.hasClass(expectedClassName)).to.equal(true); 
  });
});
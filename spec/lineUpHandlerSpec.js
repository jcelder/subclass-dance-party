describe('lineUpHandler', function() {
  beforeEach(function() {
    window.dancers = [];
    for (var i = 0; i < 5; i++) {
      var dancer = new BlinkyDancer(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
      window.dancers.push(dancer);
    }
  });
  it('should properly calculate the new position of the dancers', function() {
    lineUpHandler();
    expect(window.dancers[0].$node.css('top')).to.equal('0vh');
  });
});
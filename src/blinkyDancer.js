var BlinkyDancer = function(top, left, timeBetweenSteps) {
  var character = 'hula';
  Dancer.call(this, top, left, character, timeBetweenSteps);
  this.$node.addClass('dancer__blinky');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
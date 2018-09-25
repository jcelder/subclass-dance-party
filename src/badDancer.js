var BadDancer = function(top, left, timeBetweenSteps) {
  var character = 'stan';
  Dancer.call(this, top, left, character, timeBetweenSteps);
  this.$node.addClass('dancer__bad');
};

BadDancer.prototype = Object.create(Dancer.prototype);
BadDancer.prototype.constructor = BadDancer; 
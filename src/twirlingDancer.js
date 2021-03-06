var TwirlingDancer = function(top, left, timeBetweenSteps) {
  var character = 'carlton';
  Dancer.call(this, top, left, character, timeBetweenSteps);
  this.styles = {
    animation: 'rotate-scale-up-ver 1s linear infinite alternate both',
    '-webkit-animation': 'rotate-scale-up-ver 1s linear infinite alternate both'
  };
  this.$node.addClass('dancer__twirling');
  this.$node.css(this.styles);
};

TwirlingDancer.prototype = Object.create(Dancer.prototype);
TwirlingDancer.prototype.constructor = TwirlingDancer; 
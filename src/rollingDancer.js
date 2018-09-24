var RollingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.styles = {
    animation: 'rotate-scale-up 1s linear infinite alternate both',
    '-webkit-animation': 'rotate-scale-up 1s linear infinite alternate both'
  };
  this.$node.addClass('dancer__rolling');
  this.$node.css(this.styles);
};

RollingDancer.prototype = Object.create(Dancer.prototype);
RollingDancer.prototype.constructor = RollingDancer; 
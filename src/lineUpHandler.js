var lineUpHandler = function() {
  var numberOfDancers = window.dancers.length;
  var heightPerDancer = Math.floor(100 / numberOfDancers);
  var initialHeight = 10;
  for (var i = 0; i < numberOfDancers; i++) {
    styles = {
      top: `${initialHeight}vh`,
      left: '5vw'
    };
    window.dancers[i].$node.css(styles);
    initialHeight += heightPerDancer;
  }
};
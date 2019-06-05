var makeHappyDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('happydancer');
  this.deg = 0;
};

makeHappyDancer.prototype = Object.create(makeDancer.prototype);
makeHappyDancer.prototype.constructor = makeHappyDancer;
makeHappyDancer.prototype.step = function() {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate(
    { deg: this.deg + 20},
    {
      duration: this.timeBetweenSteps,
      step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' })
      }
    }
  );
  this.deg += 20;
};

makeHappyDancer.prototype.reset = function () {

  var resetSetting = {
    top: '300px'
  }
  this.$node.css(resetSetting);
}
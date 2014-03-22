var expect = require("chai").expect;
describe("example6.js", function(){
  it("works", function() {
var pt = {
  x: 123,
  y: 444
};
var rect = {
  topLeft: {
    x: 1,
    y: 2
  },
  bottomRight: {
    x: 3,
    y: 4
  }
};
var $__0 = pt,
    x = $__0.x,
    y = $__0.y;
var $__0 = rect,
    $__1 = $__0.topLeft,
    x1 = $__1.x,
    y1 = $__1.y,
    $__2 = $__0.bottomRight,
    x2 = $__2.x,
    y2 = $__2.y;
expect(x + y).to.be.eql(567);
expect([x1, y1, x2, y2].join(',')).to.be.eql('1,2,3,4');

  });
});
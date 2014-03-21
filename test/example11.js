var expect = require("chai").expect;
describe("example11.js", function(){
  it("works", function() {
function getPoint() {
  var x = 1;
  var y = 10;
  return {
    x: x,
    y: y
  };
}
expect(getPoint()).to.be.eql({
  x: 1,
  y: 10
});

  });
});
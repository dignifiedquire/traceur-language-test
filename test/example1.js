var expect = require("chai").expect;
describe("example1.js", function(){
  it("works", function() {
var square = (function(x) {
  return x * x;
});
var square2 = (function(x) {
  return x * x;
});
expect(square(4)).to.be.eql(16);
expect(square2(4)).to.be.eql(16);

  });
});
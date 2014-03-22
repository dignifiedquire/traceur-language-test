var expect = require("chai").expect;
describe("example9.js", function(){
  it("works", function() {
var object = {
  value: 42,
  toString: function() {
    return this.value;
  }
};
expect(object.toString()).to.be.eql(42);

  });
});
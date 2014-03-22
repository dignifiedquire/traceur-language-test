var expect = require("chai").expect;
describe("example15.js", function(){
  it("works", function() {
var s = Symbol();
var object = {};
object[s] = 42;
expect(object[s]).to.be.eql(42);

  });
});
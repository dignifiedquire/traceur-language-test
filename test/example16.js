var expect = require("chai").expect;
describe("example16.js", function(){
  it("works", function() {
var s = Symbol();
var object = {};
object[s] = 42;
assert.equal(42, object[s]);

  });
});
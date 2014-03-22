var expect = require("chai").expect;
describe("example13.js", function(){
  it("works", function() {
var a = [1];
var b = [2, 3, 4];
var c = [6, 7];
var d = $traceurRuntime.spread([0], a, b, [5], c);
expect(d).to.be.eql([0, 1, 2, 3, 4, 5, 6, 7]);

  });
});
var expect = require("chai").expect;
describe("example8.js", function(){
  it("works", function() {
var binary = [0, 1, 3];
expect(binary).to.be.eql([0, 1, 3]);
var octal = [0, 1, 8, 63];
expect(octal).to.be.eql([0, 1, 8, 63]);

  });
});
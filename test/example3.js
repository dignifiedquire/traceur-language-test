var expect = require("chai").expect;
describe("example3.js", function(){
  it("works", function() {
var $__0;
var x = 0;
var obj = ($__0 = {}, Object.defineProperty($__0, x, {
  value: 'hello',
  configurable: true,
  enumerable: true,
  writable: true
}), $__0);
expect(obj[0]).to.be.eql('hello');

  });
});
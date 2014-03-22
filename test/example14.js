var expect = require("chai").expect;
describe("example14.js", function(){
  it("works", function() {
var name = 'world';
var greeting = ("hello " + name);
expect(greeting).to.be.eql('hello world');

  });
});
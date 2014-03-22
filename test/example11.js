var expect = require("chai").expect;
describe("example11.js", function(){
  it("works", function() {
function push(array) {
  for (var items = [],
      $__0 = 1; $__0 < arguments.length; $__0++)
    items[$__0 - 1] = arguments[$__0];
  items.forEach(function(item) {
    array.push(item);
  });
}
var res = [];
push(res, 1, 2, 3);
expect(res).to.be.eql([1, 2, 3]);

  });
});
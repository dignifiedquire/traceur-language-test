var expect = require("chai").expect;
describe("example12.js", function(){
  it("works", function() {
function push(array) {
  for (var items = [],
      $__0 = 1; $__0 < arguments.length; $__0++)
    items[$__0 - 1] = arguments[$__0];
  items.forEach(function(item) {
    array.push(item);
  });
}

  });
});
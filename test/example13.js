var expect = require("chai").expect;
describe("example13.js", function(){
  it("works", function() {
function push(array) {
  var $__1;
  for (var items = [],
      $__0 = 1; $__0 < arguments.length; $__0++)
    items[$__0 - 1] = arguments[$__0];
  ($__1 = array).push.apply($__1, $traceurRuntime.toObject(items));
}
function add(x, y) {
  return x + y;
}
var numbers = [4, 38];
add.apply(null, $traceurRuntime.toObject(numbers));

  });
});
var expect = require("chai").expect;
describe("example7.js", function(){
  it("works", function() {
function iterateElements(array) {
  var $__0;
  return ($__0 = {}, Object.defineProperty($__0, Symbol.iterator, {
    value: function() {
      var index = 0;
      var current;
      return {next: function() {
          if (index < array.length) {
            current = array[index++];
            return {
              value: current,
              done: false
            };
          }
          return {
            value: undefined,
            done: true
          };
        }};
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), $__0);
}
var g = iterateElements([1, 2, 3]);
for (var $__1 = g[Symbol.iterator](),
    $__2; !($__2 = $__1.next()).done; ) {
  var a = $__2.value;
  {
    console.log(a);
  }
}

  });
});
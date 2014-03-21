var expect = require("chai").expect;
describe("example0.js", function(){
  it("works", function() {
var array = (function() {
  var $__0 = 0,
      $__1 = [];
  for (var $__4 = [0, 1, 2][Symbol.iterator](),
      $__5; !($__5 = $__4.next()).done; ) {
    var x = $__5.value;
    for (var $__2 = [0, 1, 2][Symbol.iterator](),
        $__3; !($__3 = $__2.next()).done; ) {
      var y = $__3.value;
      $__1[$__0++] = x + '' + y;
    }
  }
  return $__1;
}());
expect(array).to.be.eql(['00', '01', '02', '10', '11', '12', '20', '21', '22']);

  });
});
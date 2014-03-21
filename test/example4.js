var expect = require("chai").expect;
describe("example4.js", function(){
  it("works", function() {
function f(list) {
  var indexA = arguments[1] !== (void 0) ? arguments[1] : 0;
  var indexB = arguments[2] !== (void 0) ? arguments[2] : list.length;
  return [list, indexA, indexB];
}

  });
});
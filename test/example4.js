var expect = require("chai").expect;
describe("example4.js", function(){
  it("works", function() {
function f(list) {
  var indexA = arguments[1] !== (void 0) ? arguments[1] : 0;
  var indexB = arguments[2] !== (void 0) ? arguments[2] : list.length;
  return [list, indexA, indexB];
}
expect(f([1, 2, 3])).to.be.eql([[1, 2, 3], 0, 3]);
expect(f([1, 2, 3], 1)).to.be.eql([[1, 2, 3], 1, 3]);
expect(f([1, 2, 3], 1, 2)).to.be.eql([[1, 2, 3], 1, 2]);

  });
});
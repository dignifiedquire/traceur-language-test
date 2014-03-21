var expect = require("chai").expect;
describe("example8.js", function(){
  it("works", function() {
function getLoader() {
  var LoaderHooks = traceur.modules.LoaderHooks;
  var loaderHooks = new LoaderHooks(new traceur.util.ErrorReporter(), url);
  return new traceur.modules.CodeLoader(loaderHooks);
}
getLoader().import('../src/traceur.js', function(mod) {
  console.log('DONE');
}, function(error) {
  console.error(error);
});

  });
});
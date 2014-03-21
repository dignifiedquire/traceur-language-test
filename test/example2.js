var expect = require("chai").expect;
describe("example2.js", function(){
  it("works", function() {
var CustomButton = function CustomButton() {
  "use strict";
  this.value = 'Custom Button';
};
($traceurRuntime.createClass)(CustomButton, {}, {}, HTMLButtonElement);
var button = new CustomButton();
document.body.appendChild(button);

  });
});
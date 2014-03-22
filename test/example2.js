var expect = require("chai").expect;
describe("example2.js", function(){
  it("works", function() {
var Character = function Character(x, y) {
  "use strict";
  this.x = x;
  this.y = y;
};
($traceurRuntime.createClass)(Character, {}, {});
var Monster = function Monster(x, y, name) {
  "use strict";
  $traceurRuntime.superCall(this, $Monster.prototype, "constructor", [x, y]);
  this.name = name;
  this.health_ = 100;
};
var $Monster = Monster;
($traceurRuntime.createClass)(Monster, {
  attack: function(character) {
    "use strict";
    $traceurRuntime.superCall(this, $Monster.prototype, "attack", [character]);
  },
  get isAlive() {
    "use strict";
    return this.health_ > 0;
  },
  get health() {
    "use strict";
    return this.health_;
  },
  set health(value) {
    "use strict";
    if (value < 0)
      throw new Error('Health must be non-negative.');
    this.health_ = value;
  }
}, {}, Character);
var myMonster = new Monster(5, 1, 'arrrg');
expect(myMonster.health).to.be.eql(100);
expect(myMonster.isAlive).to.be.eql(true);
expect(myMonster.x).to.be.eql(5);
expect(myMonster.name).to.be.eql('arrrg');

  });
});
var assert = require('assert');
var rocket  = require('../bin/rocket');

describe("rocket cli", function() {
  it("it should have a run command", function() {
   var expected = "run"; 
   var actual = "";
   for(var i = 0; i < rocket.commands.length;i++) {
     if(rocket.commands[i]._name === expected)
       actual = rocket.commands[i]._name;
   }
   assert.equal(expected,actual);
  });
});

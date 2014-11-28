// Filename: models/team
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  
var RunnerModel = Backbone.Model.extend({
    defaults: {
      id: "1",
      first: "Harry", 
      last: "Potter",
      school: "Hogwarts"
    }
  });

  return RunnerModel;
});
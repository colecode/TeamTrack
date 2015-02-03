// Filename: models/team
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  
var RunnerModel = Backbone.Model.extend({
    defaults: {
      id: "",
      firstName: "Hank", 
      lastName: "Shcrader",
      schoolName: "TexMex"
    }
});

  return RunnerModel;
});
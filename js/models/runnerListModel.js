define([
  'underscore',
  'backbone'
], function(_, Backbone){
  
var RunnerModel = Backbone.Model.extend({
    defaults: {
      id: "",
      firstName: "John", 
      lastName: "Doe",
      schoolName: "ABC"
    }
});

  return RunnerModel;
});
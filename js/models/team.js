// Filename: models/team
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  
var ProjectModel = Backbone.Model.extend({
	urlRoot : '/api/example_1.php',
    defaults: {
      id: "1",	
      first: "Harry", 
      last: "Potter",
      school: "Hogwarts"
    }
  });
  // Return the model for the module
  return ProjectModel;
});
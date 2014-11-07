// Filename: models/team
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var TeamModel = Backbone.Model.extend({
    defaults: {
      name: "Haddon Heights Boys XC"
    }
  });
  // Return the model for the module
  return TeamModel;
});
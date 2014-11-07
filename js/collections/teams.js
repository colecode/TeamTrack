// Filename: collections/projects
define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/team'
], function(_, Backbone, TeamModel){
  var TeamCollection = Backbone.Collection.extend({
    model: TeamModel
  });
  // You don't usually return a collection instantiated
  return TeamCollection;
});
// Filename: collections/projects
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var TeamCollection = Backbone.Collection.extend({
    model: TeamModel
  });
  // You don't usually return a collection instantiated
  return TeamCollection;
});
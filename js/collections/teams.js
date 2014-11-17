// Filename: collections/projects
define([
  'underscore',
  'backbone',
  'models/team',
], function(_, Backbone, TeamModel){

  var TeamCollection = Backbone.Collection.extend({
    model: TeamModel
  });
  
  return TeamCollection;
});
// Filename: collections/projects
define([
  'underscore',
  'backbone',
  'models/runner',
], function(_, Backbone, RunnerModel){

  var RunnerCollection = Backbone.Collection.extend({
  	url : 'api/example1.php',
    model: RunnerModel
  });
  
  return RunnerCollection;
});
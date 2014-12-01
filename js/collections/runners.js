// Filename: collections/projects
define([
  'underscore',
  'backbone',
  'models/runner',
], function(_, Backbone, RunnerModel){

  var RunnerCollection = Backbone.Collection.extend({
  	url : 'api/runnerslist.php',
    model: RunnerModel
  });
  
  return RunnerCollection;
});
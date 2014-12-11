// Filename: collections/projects
define([
  'underscore',
  'backbone',
  'models/runner',
], function(_, Backbone, RunnerModel){

  var RunnerCollection = Backbone.Collection.extend({
  	url : 'api/index.php/runners',
    model: RunnerModel
  });
  
  return RunnerCollection;
});
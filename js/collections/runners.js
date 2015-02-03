// Filename: collections/projects
define([
  'underscore',
  'backbone',
  'models/runnerListModel',
], function(_, Backbone, RunnerModel){

  var RunnerCollection = Backbone.Collection.extend({
  	url : 'api/index.php/runners',
    model: RunnerModel
  });
  
  return RunnerCollection;
});
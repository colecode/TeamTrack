define([
  'backbone'
], function(Backbone){
  
var RuRosterModel = Backbone.Model.extend({
    defaults: {
      fk_teamID: -1,
      fk_runnerID: -1
    },
    url : 'api/index.php/teamroster'
});

  return RunnerRosterModel;
});
define([
  'backbone'
], function(Backbone){
  
var RunnerRosterModel = Backbone.Model.extend({
    defaults: {
      tId: -1,
      rId: -1
    },
    url : 'api/index.php/teamroster'
});

  return RunnerRosterModel;
});
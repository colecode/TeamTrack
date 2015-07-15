// Filename: models/team
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  
var CreateTeamModel = Backbone.Model.extend({
      defaults: {
        teamName: '',
        fk_coachID: -1,
        fk_schoolID: -1,
      },
      url : 'api/index.php/teams'
});

  return CreateTeamModel;
});
// Filename: models/team
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  
var CreateTeamModel = Backbone.Model.extend({
      defaults: {
        tName: ""
      },
      url : 'api/index.php/teams'
});

  return CreateTeamModel;
});
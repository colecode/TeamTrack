// Filename: models/team
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  
var CreateRunnerModel = Backbone.Model.extend({
      defaults: {
        fName: "", 
        lName: "",
        sName:""
      },
      url : 'api/index.php/runners'
});

  return CreateRunnerModel;
});
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  
var CreateRunnerModel = Backbone.Model.extend({
      defaults: {
        firstName: '', 
        lastName: '',
        schoolCode: '',
        gender: ''
      },
      url : 'api/index.php/runners'
});

  return CreateRunnerModel;
});
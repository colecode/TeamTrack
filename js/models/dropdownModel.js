define([
  'underscore',
  'backbone'
], function(_, Backbone){
  
var DropdownModel = Backbone.Model.extend({
      defaults: {
      	id:"",
        description: ""
      }
});

  return DropdownModel;
});
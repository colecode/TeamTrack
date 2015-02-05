define([
  'underscore',
  'backbone',
  'models/dropdownModel',
], function(_, Backbone, DropdownModel){

  var DropdownCollection = Backbone.Collection.extend({
  	url : '',
    model: DropdownModel
  });
  
  return DropdownCollection;
});
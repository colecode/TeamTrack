define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'models/runner'
  ], function($, _, Backbone, React, backboneMixin, RunnerModel){

    // Initialize the model here so it's scope can be reached in MyWidget
    var masterModel;

    var CreateRunnerMaster = React.createClass({displayName: 'CreateRunnerMaster',

      mixins: [backboneMixin],

      render: function() {

        return (
          React.createElement("div", {className: 'my-container'}, 
            React.createElement("div", {className: 'wrap'}, 
            
            React.createElement("form", {role: "form"}, 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("label", null, "First name"), 
                React.createElement("input", {type: "text", className: "form-control", id: "createRunnerFirst", placeholder: "First name"})
              ), 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("label", null, "Last name"), 
                React.createElement("input", {type: "text", className: "form-control", id: "createRunnerLast", placeholder: "Last name"})
              ), 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("label", null, "School"), 
                React.createElement("input", {type: "text", className: "form-control", id: "createRunnerSchool", placeholder: "School"})
              ), 
              React.createElement("div", {className: "text-center"}, 
                React.createElement("button", {className: "btn btn-primary"}, "Submit")
              )
            )
            )
          )
          )
      }
    });

    var CreateRunnerView = Backbone.View.extend({
      
      el: $('#mainContent'),
      events: {
          // none
      },

      initialize: function() {
          // none
      },

      render: function (){
        // **IMPORTANT** This inital props has to be named 'collection' //
        React.render(       
          React.createElement(CreateRunnerMaster, null),
          this.el
        );
      } 

      });

    return CreateRunnerView;
  });


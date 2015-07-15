define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot',
  'views/build/createteam',
  'views/build/createrunner'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot, CreateTeam, CreateRunner){

    var TeamBuilderClass = React.createClass({displayName: "TeamBuilderClass",

      mixins: [backboneMixin],
      mixins: [React.addons.LinkedStateMixin],

      handleSubmit: function() {

        
      },

      render: function() {

        var Button = ReactBoot.Button;

        return (
          React.createElement("div", null, 
          React.createElement("div", {className: 'page-sub-header'}, 
            React.createElement("div", {className: 'wrap'}, 
            React.createElement("p", null, "//////// \\xC2\\xA0\\xC2\\xA0Team Builder")
            )
          ), 
          React.createElement("div", {className: 'wrap'}, 
            React.createElement(CreateTeam, null)
          )
          )
        )
      }
    });
    
    var TeamBuilderView = Backbone.View.extend({
    
      el: $('#mainContent'),
      events: {
        
      },

      initialize: function() { 
        
      },

      render: function (){
        
        React.render(       
          React.createElement(TeamBuilderClass, null),
          this.el
        );
      } 
    });

    return TeamBuilderView;
  });

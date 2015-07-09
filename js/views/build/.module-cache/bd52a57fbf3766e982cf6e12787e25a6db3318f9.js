define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot',
  'views/build/createteam',
  'views/build/createrunner',
  'views/build/simple-runners-table'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot, CreateTeam, CreateRunner, SimpleRunnersTable){

    var TeamBuilderClass = React.createClass({displayName: "TeamBuilderClass",

      mixins: [backboneMixin],
      mixins: [React.addons.LinkedStateMixin],

      getInitialState: function () {
        return {
            selectedRunners:[],
            allRunners:[],
            schoolRunners: []
        };
      },

      handleClick: function() {
        console.log('test');
        
      },

      render: function() {
        var Button = ReactBoot.Button;
        return (
          React.createElement("div", null, 
            React.createElement("div", {className: 'wrap'}, 
              React.createElement(CreateTeam, {schoolRunners: this.state.schoolRunners}), 
              this.state.schoolRunners, 
              React.createElement(SimpleRunnersTable, {selectedRunners: this.state.selectedRunners, allRunners: this.state.schoolRunners}), 
              React.createElement(Button, {onClick: this.handleClick}, " POST ")
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


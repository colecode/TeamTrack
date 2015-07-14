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
  'views/build/simple-runners-table',
  'views/build/team-card'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot, CreateTeam, CreateRunner, SimpleRunnersTable, TeamCard){

    var TeamBuilderClass = React.createClass({displayName: "TeamBuilderClass",

      mixins: [backboneMixin],
      mixins: [React.addons.LinkedStateMixin],

      getInitialState: function () {
        return {
            selectedRunners:[],
            allRunners:[]
        };
      },

      handleClick: function() {
        console.log('test');
        var testArr = [];
        testArr = this.state.schoolRunners.splice();
        
      },

      handleSchoolSelect: function(val) {
        this.setState({schoolName: val.selectedDomain.children});
        this.setState({schoolCode: val.selectedDomain.domainCode});
        $.ajax({
          url:"api/index.php/getrunnersperschool/" + val.selectedDomain.domainCode,
          type:"GET",
          success:function(data){
            this.setState({allRunners: data.slice() }) ;
          }.bind(this), 
          error:function(err) {
            console.log('error building runners list based on school selection');
            console.log(err);
          },    
          dataType:"json"
        });
      },

      handleCreateRunner: function() {
        
        $.ajax({
          url:"api/index.php/getrunnersperschool/" + this.state.schoolCode,
          type:"GET",
          success:function(data){
            this.setState({allRunners: data.slice() }) ;
          }.bind(this), 
          error:function(err) {
            console.log('error building runners list based on school selection');
            console.log(err);
          },    
          dataType:"json"
        });
      },

      handleTeamNameUpdate: function(val) {
        console.log(val);
      },

      render: function() {
        var Button = ReactBoot.Button;
        return (
          React.createElement("div", null, 
            React.createElement("div", {className: 'wrap'}, 
              React.createElement(CreateTeam, {onSchoolSelect: this.handleSchoolSelect, schoolName: this.state.schoolName, onTeamNameUpdate: this.handleTeamNameUpdate}), 
              React.createElement(SimpleRunnersTable, {selectedRunners: this.state.selectedRunners, allRunners: this.state.allRunners}), 
              React.createElement(CreateRunner, {schoolCode: this.state.schoolCode, handleCreateRunner: this.handleCreateRunner}), 
              React.createElement(Button, {onClick: this.handleClick}, " POST "), 
              React.createElement(TeamCard, {teamName: this.state.teamName, schoolName: this.state.schoolName, stateName: this.state.stateName})
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


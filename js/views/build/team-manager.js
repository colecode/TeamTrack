define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'views/build/my-teams-table',
  'views/build/tm-runners-table',
  'views/build/runner-profile-component'
  ], function($, _, Backbone, React, backboneMixin, MyTeamsTable, TMRunnersTable, RunnerProfile){


    var TeamManagerClass = React.createClass({displayName: "TeamManagerClass",

      mixins: [backboneMixin],

      getInitialState: function () {
        return {
          teamRunners: [],
          teamName: 'Select a team above',
          generalData:[],
          racesPerRunner:[],
          teamsPerRunner:[],
          teamsPerCoach:[]
        };
      },

      handleTeamSelect: function(data) {

        this.setState({teamName:data.teamName})

        $.ajax({
          url:"api/index.php/getrunnersperteam/" + data.teamID,
          type:"GET",
          success:function(data){            
            this.setState({teamRunners: data});
          }.bind(this),     
          dataType:"json"
        });

      },

      handleRunnerSelect: function(data) {

        // Populate general runner profile data
        $.ajax({
          url:"api/index.php/getprofile/" + data,
          type:"GET",
          success:function(data){       
            this.setState({generalData: data[0]});     
          }.bind(this),     
          dataType:"json"
        });

        // Populate profile races table
        $.ajax({
          url:"api/index.php/getraces/" + data,
          type:"GET",
          success:function(data){            
            this.setState({racesPerRunner: data});  
          }.bind(this),     
          dataType:"json"
        });

        // Populate profile teams table
        $.ajax({
          url:"api/index.php/getteamsperrunner/" + data,
          type:"GET",
          success:function(data){            
            this.setState({teamsPerRunner: data});  
          }.bind(this),     
          dataType:"json"
        });

      },

      loadDataFromServer: function() {
        
        // Hardcoded until User Mgmt is setup
        var coachID = 3;

        $.ajax({
          url:"api/index.php/getteamspercoach/" + coachID,
          type:"GET",
          success:function(data){            
            this.setState({teamsPerCoach: data});  
          }.bind(this),     
          dataType:"json"
        });

      },

      componentDidMount: function() {
        this.loadDataFromServer();
      },

      render: function() {

        return (
            React.createElement("div", {className: 'container'}, 
                React.createElement("div", {className: "row row-padding"}, 
                  React.createElement("div", {className: "col-md-12 centered"}, 
                    React.createElement("h4", null, "My Teams"), 
                    React.createElement(MyTeamsTable, {teamsPerCoach: this.state.teamsPerCoach, handleTeamSelect: this.handleTeamSelect})
                  )
                ), 
                React.createElement("div", {className: "row row-padding"}, 
                  React.createElement("div", {className: "col-md-12 centered"}, 
                    React.createElement("h4", null, this.state.teamName), 
                    React.createElement(TMRunnersTable, {handleRunnerSelect: this.handleRunnerSelect, teamRunners: this.state.teamRunners})
                  )
                ), 
                React.createElement("div", {className: "row row-padding"}, 
                  React.createElement("div", {className: "col-md-12 centered"}, 
                    React.createElement(RunnerProfile, {generalData: this.state.generalData, racesPerRunner: this.state.racesPerRunner, teamsPerRunner: this.state.teamsPerRunner})
                  )
                )
            )
        )
      }
    });
    
    var TeamManagerView = Backbone.View.extend({
    
      el: $('#mainContent'),
      events: {
        
      },

      initialize: function() { 
        
      },

      render: function (){
        
        React.render(       
          React.createElement(TeamManagerClass, null),
          this.el
        );
      } 
    });

    return TeamManagerView;
  });



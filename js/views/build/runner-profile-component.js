define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'views/build/races-table',
  'views/build/splits-table',
  'views/build/runner-teams-table'
  ], function($, _, Backbone, React, RacesTable, SplitsTable, RunnerTeamsTable){

    var RunnerProfileComponent = React.createClass({displayName: "RunnerProfileComponent",


      getInitialState: function () {
        return {
            selectedRace:[],
            allSplits: []
        };
      },

      handleRaceSelect: function(val) {
          
          $.ajax({
            url:"api/index.php/getsplits/" + val,
            type:"GET",
            success:function(data){            
              this.setState({allSplits: data});  
            }.bind(this),     
            dataType:"json"
          });
      },


      render: function() {

        return (

          React.createElement("div", {className: 'container'}, 
                React.createElement("div", {className: "row row-padding"}, 
                  React.createElement("div", {className: "col-md-12 centered"}, 
                      React.createElement("h4", null, "Runner Description"), 
                      React.createElement("p", null, "Name: ", this.props.generalData.firstName, " ", this.props.generalData.lastName), 
                      React.createElement("p", null, "State: ", this.props.generalData.stateName), 
                      React.createElement("p", null, "School: ", this.props.generalData.schoolName)
                  )
                ), 
                React.createElement("div", {className: "row row-padding"}, 
                  React.createElement("div", {className: "col-md-12 centered"}, 
                    React.createElement("h4", null, "Team Affiliations"), 
                    React.createElement(RunnerTeamsTable, {runnerTeams: this.props.teamsPerRunner})
                  )
                ), 
                React.createElement("div", {className: "row row-padding"}, 
                  React.createElement("div", {className: "col-md-12 centered"}, 
                    React.createElement("h4", null, "Races"), 
                    React.createElement(RacesTable, {onRaceSelect: this.handleRaceSelect, selectedRace: this.state.selectedRace, races: this.props.racesPerRunner})
                  )
                ), 
                React.createElement("div", {className: "row row-padding"}, 
                  React.createElement("div", {className: "col-md-12 centered"}, 
                    React.createElement("h4", null, "Splits"), 
                    React.createElement(SplitsTable, {allSplits: this.state.allSplits})
                  )
                )
            )
        )
      }

    });
  
    return RunnerProfileComponent;
  
  });




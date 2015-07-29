define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot',
  ], function($, _, Backbone, React, ReactBoot){

    var RunnerTeamsTable = React.createClass({displayName: "RunnerTeamsTable",
      
      render: function() {
        var Table = ReactBoot.Table;

        return (
            
            React.createElement("div", null, 
              React.createElement(Table, null, 
              React.createElement("thead", null, 
                React.createElement("tr", null, 
                React.createElement("th", null, "Team Name"), 
                React.createElement("th", null, "Coach")
              )
              ), 
              React.createElement("tbody", null, 
                this.props.runnerTeams.map(function(team, j) {
                      return (React.createElement("tr", null, 
                                React.createElement("td", null, 
                                team.teamName
                                ), 
                                React.createElement("td", null, 
                                "Matt Martin"
                                )
                              ));
                    },this)
                )
              )
            )              
          )
      }
    });

    return RunnerTeamsTable;
});



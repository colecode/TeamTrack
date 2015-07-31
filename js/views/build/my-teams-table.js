 define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react'
  ], function($, _, Backbone, React){

    var MyTeamsTable = React.createClass({displayName: "MyTeamsTable",

      handleSelect: function(i) {

          var selectedTeam = this.props.teamsPerCoach[i];
          this.props.handleTeamSelect(selectedTeam);
      },

      render: function() {
       
        return (          
            React.createElement("div", {className: "medium-table"}, 
              React.createElement("table", {className: "table table-responsive"}, 
                React.createElement("thead", null, 
                  React.createElement("tr", null, 
                    React.createElement("th", {className: "centered"}, "Team Name"), 
                    React.createElement("th", {className: "centered"}, "School")
                  )
                ), 
                React.createElement("tbody", null, 
                  this.props.teamsPerCoach.map(function(team, i) {
                      return (React.createElement("tr", {onClick: this.handleSelect.bind(this, i), key: i}, 
                                React.createElement("td", null, 
                                team.teamName
                                ), 
                                React.createElement("td", null, 
                                team.schoolName
                                )
                              ));
                    },this)
                )
              )
            )          
        )
      }

    });

    return MyTeamsTable;

  });

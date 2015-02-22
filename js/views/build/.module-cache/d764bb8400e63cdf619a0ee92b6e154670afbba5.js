define(
  [
  'jquery',
  'underscore',
  'react',
  'reactboot',
  ], function($, _, React, ReactBoot){

    var TeamsTable = React.createClass({displayName: 'TeamsTable',
       
      handleSelect: function() {
              
      },

      render: function() {
        var PanelGroup = ReactBoot.PanelGroup;
        var Panel = ReactBoot.Panel;
        // for each team
        // generate a panel
            // for each panel
            // list all members of the team
        return (
            
            React.createElement("div", {id: "teamsTableComponent"}, 
             React.createElement(PanelGroup, {defaultActiveKey: "1", accordion: true}, 
                React.createElement(Panel, {header: "Panel 1", eventKey: "1"}, "Panel 1 content"), 
                React.createElement(Panel, {header: "Panel 2", eventKey: "2"}, "Panel 2 content"), 
                this.props.myteams.map(function(team, i) {
                      return (React.createElement(Panel, {key: i, header: team.teamName}, 
                                React.createElement("td", null, 
                                team.firstName
                                ), 
                                React.createElement("td", null, 
                                team.lastName
                                ), 
                                React.createElement("td", null, 
                                runner.stateName
                                ), 
                                React.createElement("td", null, 
                                runner.schoolName
                                )
                              ));
                    },this)
             )
            )              
          )
      }
    });

    return TeamsTable;
});



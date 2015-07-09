define(
  [
  'jquery',
  'underscore',
  'react',
  'reactboot',
  ], function($, _, React, ReactBoot){

    var TeamsTable = React.createClass({displayName: "TeamsTable",
       
      handleSelect: function() {
              
      },

      render: function() {
        var PanelGroup = ReactBoot.PanelGroup;
        var Panel = ReactBoot.Panel;
        
        return (
            
            React.createElement("div", {id: "teamsTableComponent"}, 
             React.createElement(PanelGroup, {defaultActiveKey: "1", accordion: true}, 
                
                this.props.myteams.map(function(team, i) {
                      return (React.createElement(Panel, {eventKey: i, header: team.teamName}, 
                                "test ", i
                              ));
                    },this)
             )
            )              
          )
      }
    });

    return TeamsTable;
});



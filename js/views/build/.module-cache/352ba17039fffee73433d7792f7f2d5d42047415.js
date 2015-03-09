define(
  [
  'jquery',
  'underscore',
  'react',
  'reactboot',
  ], function($, _, React, ReactBoot){

    var TeamsPanelItem = React.createClass({displayName: 'TeamsPanelItem',
       
      handleSelect: function() {
              
      },

      render: function() {
        var PanelGroup = ReactBoot.PanelGroup;
        var Panel = ReactBoot.Panel;
        
        return (
            
            React.createElement("div", {id: "panelItemDiv"}, 
             React.createElement(PanelGroup, {defaultActiveKey: "1", accordion: true}, 
                
                this.props.runnersonteam.map(function(runOnTeam, i) {
                      return (React.createElement(Panel, {eventKey: i, header: team.teamName}, 
                                "test ", i
                              ));
                    },this)
             )
            )              
          )
      }
    });

    return TeamsPanelItem;
});
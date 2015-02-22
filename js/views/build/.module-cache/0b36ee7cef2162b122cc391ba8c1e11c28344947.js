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

        return (
            
            React.createElement("div", {id: "teamsTableComponent"}, 
             React.createElement(PanelGroup, {defaultActiveKey: "1", accordion: true}, 
                React.createElement(Panel, {header: "Panel 1", eventKey: "1"}, "Panel 1 content"), 
                React.createElement(Panel, {header: "Panel 2", eventKey: "2"}, "Panel 2 content")
             )
            )              
          )
      }
    });

    return TeamsTable;
});



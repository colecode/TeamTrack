define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot'
  ], function($, _, Backbone, React, ReactBoot){
    
    var TeamCardClass = React.createClass({displayName: "TeamCardClass",

      render: function() {
        var Well = ReactBoot.Well;
        var headerStyle = {
          marginTop: '0'
        };
        var wellStyle = {
          backgroundColor: '#4CDA84'
        };

        return (          
          React.createElement("div", null, 
            React.createElement(Well, {style: wellStyle}, 
              React.createElement("h3", {style: headerStyle}, "Team Card"), 
              React.createElement("div", null, 
                React.createElement("p", null, "Team Name:"), this.props.teamName
              ), 
              React.createElement("div", null, 
                React.createElement("p", null, "State:"), this.props.stateName
              ), 
              React.createElement("div", null, 
               React.createElement("p", null, "School:"), this.props.schoolName
              )
            )
        )        
        )
      }

    });

    return TeamCardClass;

  });

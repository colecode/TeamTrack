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
          React.createElement("div", {style: wellStyle}, 
            React.createElement(Well, {bsStyle: 'info'}, 
              React.createElement("h3", {style: headerStyle}, "Team Card"), 
              React.createElement("div", {className: 'input-group form-field-sizes'}, 
                React.createElement("p", null, "Team Name:"), this.props.teamName
              ), 
              React.createElement("div", {className: 'input-group form-field-sizes'}, 
                React.createElement("p", null, "State:"), this.props.stateName
              ), 
              React.createElement("div", {className: 'input-group form-field-sizes'}, 
               React.createElement("p", null, "School:"), this.props.schoolName
              )
            )
        )        
        )
      }

    });

    return TeamCardClass;

  });

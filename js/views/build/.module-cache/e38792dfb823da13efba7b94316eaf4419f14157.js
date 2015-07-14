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
        return (          
          React.createElement("div", null, 
            React.createElement(Well, null, 
              React.createElement("h3", {style: headerStyle}, "Team Card"), 
              React.createElement("div", {className: 'input-group form-field-sizes'}, 
                this.props.teamName
              ), 
              React.createElement("div", {className: 'input-group form-field-sizes'}, 
                this.props.schoolName
              ), 
              React.createElement("div", {className: 'input-group form-field-sizes'}, 
               this.props.stateName
              )
            )
        )        
        )
      }

    });

    return TeamCardClass;

  });

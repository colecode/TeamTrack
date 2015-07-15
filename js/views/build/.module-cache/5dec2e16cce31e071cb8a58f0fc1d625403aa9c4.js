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
              React.createElement("div", {className: 'input-group form-field-sizes'}, 
                React.createElement("p", null, "Team Name:"), this.props.teamName
              ), 
              React.createElement("div", {className: 'input-group form-field-sizes'}, 
                React.createElement("p", null, "State:"), this.props.stateName
              ), 
              React.createElement("div", {className: 'input-group form-field-sizes'}, 
               React.createElement("p", null, "School:"), this.props.schoolName
              )
            ), 
            React.createElement("div", {className: "mdl-card mdl-shadow--2dp demo-card-wide"}, 
              React.createElement("div", {className: "mdl-card__title"}, 
                React.createElement("h2", {className: "mdl-card__title-text"}, "Welcome")
              ), 
              React.createElement("div", {className: "mdl-card__supporting-text"}, 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit." + ' ' +
                "Mauris sagittis pellentesque lacus eleifend lacinia..."
              ), 
              React.createElement("div", {className: "mdl-card__actions mdl-card--border"}, 
                React.createElement("a", {className: "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"}, 
                  "Get Started"
                )
              ), 
              React.createElement("div", {className: "mdl-card__menu"}, 
                React.createElement("button", {className: "mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"}, 
                  React.createElement("i", {className: "material-icons"}, "share")
                )
              )
            )
        )        
        )
      }

    });

    return TeamCardClass;

  });

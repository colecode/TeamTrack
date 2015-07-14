define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react'
  ], function($, _, Backbone, React){
    
    var TeamCardClass = React.createClass({displayName: "TeamCardClass",

      render: function() {
       
        return (          
          React.createElement("div", null, 
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
      }

    });

    return TeamCardClass;

  });

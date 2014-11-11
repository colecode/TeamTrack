define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',  
  'backbonemixin',
  ], function($, _, Backbone, React, backboneMixin){

    var RunnerTableRow = React.createClass({displayName: 'RunnerTableRow',

      mixins: [backboneMixin],

      render: function() {

        return (
          
            React.createElement("tr", null, 
              React.createElement("td", null, this.props.first), 
              React.createElement("td", null, this.props.last), 
              React.createElement("td", null, this.props.school)
            )        
          
          )
      }
    });

    return RunnerTableRow;
  });
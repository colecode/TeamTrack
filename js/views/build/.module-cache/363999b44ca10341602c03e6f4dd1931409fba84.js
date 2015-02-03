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
              React.createElement("td", null, this.props.runner.firstName), 
              React.createElement("td", null, this.props.runner.lastName), 
              React.createElement("td", null, this.props.runner.schoolName)
            )        
          
        )
      }
    });

    return RunnerTableRow;
  });
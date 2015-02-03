define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',  
  'backbonemixin',
  ], function($, _, Backbone, React, backboneMixin){

    var RunnerTableRow = React.createClass({

      mixins: [backboneMixin],

      render: function() {

        return (
          
            <tr>
              <td>{this.props.runner.firstName}</td>
              <td>{this.props.runner.lastName}</td>
              <td>{this.props.runner.schoolName}</td>
            </tr>        
          
        )
      }
    });

    return RunnerTableRow;
  });
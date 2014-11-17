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

        //console.log({this.props.runner});
        //console.log({this.props});

        return (
          
            <tr>
              <td>{this.props.runner.first}</td>
              <td>{this.props.runner.last}</td>
              <td>{this.props.runner.school}</td>
            </tr>        
          
          )
      }
    });

    return RunnerTableRow;
  });
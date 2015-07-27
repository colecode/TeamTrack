define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot',
  ], function($, _, Backbone, React, ReactBoot){

    var SplitsTable = React.createClass({
      
      render: function() {
        var Table = ReactBoot.Table;

        return (
            
            <div>
              <Table>
              <thead>
                <tr>
                <th>Split Number</th>
                <th>Split Time</th>
              </tr>
              </thead>
              <tbody>
                {this.props.allSplits.map(function(split, j) {
                      return (<tr>
                                <td>
                                {split.splitIndex}
                                </td>
                                <td>
                                {split.splitTime}
                                </td>
                              </tr>);
                    },this)}
                </tbody>
              </Table>
            </div>              
          )
      }
    });

    return SplitsTable;
});



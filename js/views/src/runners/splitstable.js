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
            
            <div id="splitsTableComponent">
              <Table id="myTable">
              <thead>
                <tr>
                <th>Split Number</th>
                <th>Split Time</th>
                <th>Difference</th>
                <th>Current Total</th>
              </tr>
              </thead>
              <tbody>
                {this.props.splits.map(function(split, i) {
                      return (<tr onClick={this.handleSelect.bind(this, i)} key={i}>
                                <td>
                                {split.splitIndex}
                                </td>
                                <td>
                                {split.splitTime}
                                </td>
                                <td>
                                {split.splitDiff}
                                </td>
                                <td>
                                {split.splitTotal}
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



define(
  [
  'jquery',
  'underscore',
  'react'
  ], function($, _, React){

    var SplitsTable = React.createClass({
      
      render: function() {

        return (
            
            <div className={"medium-table"}>
              <table className={"table table-responsive"}>
              <thead>
                <tr>
                <th className={"centered"}>Split Number</th>
                <th className={"centered"}>Split Time</th>
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
              </table>
            </div>              
          )
      }
    });

    return SplitsTable;
});



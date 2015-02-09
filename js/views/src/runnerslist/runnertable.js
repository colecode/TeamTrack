define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'views/build/runnertablerow',
  'reactboot',
  ], function($, _, Backbone, React, RunnerTableRow, ReactBoot){

    var RunnerTable = React.createClass({
       
      handleSelect: function(i) {
        $($("#myTable tbody tr")[i]).addClass("highlight-row");;
        
        //var myRunner = this.props.runners[i];
      },

      render: function() {
        var Table = ReactBoot.Table;

        var rows = [];
        this.props.runners.forEach(function(runner) {
            rows.push(<RunnerTableRow runner={runner} key={runner.id} />);
        });

        return (
          
            <div id="runnerTableComponent">
              <Table id="myTable" condensed>
              <thead>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>School</th>
              </tr>
              </thead>
              <tbody>
                {this.props.runners.map(function(runner, i) {
                      return (<tr onClick={this.handleSelect.bind(this, i)} key={i}>
                                <td>
                                {runner.firstName}
                                </td>
                                <td>
                                {runner.lastName}
                                </td>
                                <td>
                                {runner.schoolName}
                                </td>
                              </tr>);
                },this)}
                </tbody>
              </Table>
            </div>              
          )
      }
    });

    return RunnerTable;
});



define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot',
  ], function($, _, Backbone, React, ReactBoot){

    var RacesSubTable = React.createClass({
       
      handleSelect: function(i) {
        $($("#myTable tbody tr")[i]).toggleClass("info");;
        
        // Index of object
        var a = this.props.selectedRunners.indexOf(this.props.runners[i]);
        
        // If object does not exist in array, add it
        if(a == -1)
        {
          this.props.selectedRunners.push(this.props.runners[i]); 
        }
        // Remove it
        else
        {
          this.props.selectedRunners.splice(a,1);
        }
              
      },

      render: function() {
        var Table = ReactBoot.Table;

        return (
            
            <div id="runnerTableComponent">
              <Table id="myTable">
              <thead>
                <tr>
                <th>Date</th>
                <th>Race Name</th>
                <th>Event</th>
                <th>Finish Time</th>
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
                                {runner.stateName}
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



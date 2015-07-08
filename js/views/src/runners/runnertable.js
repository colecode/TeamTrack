define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot',
  ], function($, _, Backbone, React, ReactBoot){

    var RunnerTable = React.createClass({
       
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

      handleProfile: function(i) {
            
        var str = "#runnerprofile/" + this.props.runners[i].runnerID;
        window.location.href = str;
              
      },

      render: function() {
        var Table = ReactBoot.Table;
        var Button = ReactBoot.Button;
        return (
            
            <div id="runnerTableComponent">
              <Table id="myTable">
              <thead>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>State</th>
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
                                {runner.stateName}
                                </td>
                                <td>
                                {runner.schoolName}
                                </td>
                                <td>
                                <Button bsStyle="primary" onClick={this.handleProfile.bind(this,i)}>Go to Profile</Button>
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



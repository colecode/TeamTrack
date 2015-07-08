define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot',
  'views/build/splitstable'
  ], function($, _, Backbone, React, ReactBoot, SplitsTable){

    var RacesTable = React.createClass({
            
      getInitialState: function () {
        return {
            allSplits: []            
        };
      },

      handleSelect: function(i) {

        $($("#myRaceSumTable tbody tr")[i]).toggleClass("info");;

        var rrID = this.props.runners[i].runInRaceID;
        
        $.ajax({
          url:"api/index.php/getsplits/" + rrID,
          type:"GET",
          success:function(data){            
            this.setState({allSplits: data});  
          }.bind(this),     
          dataType:"json"
        });
              
      },

      render: function() {
        var Table = ReactBoot.Table;

        return (
            
            <div>
              <Table id="myRaceSumTable">
              <thead>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
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
                                {runner.finishTime}
                                </td>
                              </tr>);
                    },this)}
                </tbody>
              </Table>
              <SplitsTable allSplits={this.state.allSplits} />
            </div>              
          )
      }
    });

    return RacesTable;
});



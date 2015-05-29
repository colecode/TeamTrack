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
            myRace: '' ,
            allSplits: []            
        };
      },

      handleSelect: function(i) {

        $($("#myRacesTable tbody tr")[i]).toggleClass("info");;
        
        // Index of object
        //var a = this.props.selectedRace.indexOf(this.props.races[i]);
        
        // If object does not exist in array, add it
        //if(a == -1)
        // {
        //   this.props.selectedRace.push(this.props.races[i]); 
        // }
        // // Remove it
        // else
        // {
        //   this.props.selectedRace.splice(a,1);
        // }

        var test = this.props.races[i].raceRunID;
        //this.state.myRace = test;

        //this.setState({myRace: test});
        $.ajax({
          url:"api/index.php/getsplits/" + test,
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
            
            <div id="raceTableComponent">
              <Table id="myRacesTable">
              <thead>
                <tr>
                <th>Date</th>
                <th>Race Name</th>
                <th>Event</th>
                <th>Finish Time</th>
              </tr>
              </thead>
              <tbody>
                {this.props.races.map(function(race, i) {
                      return (<tr onClick={this.handleSelect.bind(this, i)} key={i}>
                                <td>
                                {race.raceDate}
                                </td>
                                <td>
                                {race.raceName}
                                </td>
                                <td>
                                {race.eventName}
                                </td>
                                <td>
                                {race.finishTime}
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



define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot',
  ], function($, _, Backbone, React, ReactBoot){

    var RacesTable = React.createClass({
       
      handleSelect: function(i) {
        $($("#myTable tbody tr")[i]).toggleClass("info");;
        
        // Index of object
        var a = this.props.selectedRaces.indexOf(this.props.races[i]);
        
        // If object does not exist in array, add it
        if(a == -1)
        {
          this.props.selectedRace.push(this.props.runners[i]); 
        }
        // Remove it
        else
        {
          this.props.selectedRace.splice(a,1);
        }
              
      },

      render: function() {
        var Table = ReactBoot.Table;

        return (
            
            <div id="raceTableComponent">
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
            </div>              
          )
      }
    });

    return RacesTable;
});



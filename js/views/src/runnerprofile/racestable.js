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

        var runInRaceID = this.props.races[i].runInRaceID;
        this.props.onRaceSelect(runInRaceID);          
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
              
            </div>              
          )
      }
    });

    return RacesTable;
});



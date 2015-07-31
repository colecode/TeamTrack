define(
  [
  'jquery',
  'underscore',
  'react'
  ], function($, _, React){

    var RacesTable = React.createClass({
            
      getInitialState: function () {
        return {
            myRace: '' ,
            allSplits: []            
        };
      },

      handleSelect: function(i) {

        //$($("#myRacesTable tbody tr")[i]).toggleClass("info");;

        var runInRaceID = this.props.races[i].runInRaceID;
        this.props.onRaceSelect(runInRaceID);          
      },

      render: function() {

        return (

            <div className={"medium-table"}>
              <table className={"table table-responsive"}>
              <thead>
                <tr>
                <th className={"centered"}>Date</th>
                <th className={"centered"}>Race Name</th>
                <th className={"centered"}>Event</th>
                <th className={"centered"}>Finish Time</th>
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
              </table>
            </div>              
          )
      }
    });

    return RacesTable;
});



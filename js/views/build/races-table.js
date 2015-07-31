define(
  [
  'jquery',
  'underscore',
  'react'
  ], function($, _, React){

    var RacesTable = React.createClass({displayName: "RacesTable",
            
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

            React.createElement("div", {className: "medium-table"}, 
              React.createElement("table", {className: "table table-responsive"}, 
              React.createElement("thead", null, 
                React.createElement("tr", null, 
                React.createElement("th", {className: "centered"}, "Date"), 
                React.createElement("th", {className: "centered"}, "Race Name"), 
                React.createElement("th", {className: "centered"}, "Event"), 
                React.createElement("th", {className: "centered"}, "Finish Time")
              )
              ), 
              React.createElement("tbody", null, 
                this.props.races.map(function(race, i) {
                      return (React.createElement("tr", {onClick: this.handleSelect.bind(this, i), key: i}, 
                                React.createElement("td", null, 
                                race.raceDate
                                ), 
                                React.createElement("td", null, 
                                race.raceName
                                ), 
                                React.createElement("td", null, 
                                race.eventName
                                ), 
                                React.createElement("td", null, 
                                race.finishTime
                                )
                              ));
                    },this)
                )
              )
            )              
          )
      }
    });

    return RacesTable;
});



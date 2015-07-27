define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot',
  'views/build/splitstable'
  ], function($, _, Backbone, React, ReactBoot, SplitsTable){

    var RacesTable = React.createClass({displayName: "RacesTable",
            
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
            
            React.createElement("div", {id: "raceTableComponent"}, 
              React.createElement(Table, {id: "myRacesTable"}, 
              React.createElement("thead", null, 
                React.createElement("tr", null, 
                React.createElement("th", null, "Date"), 
                React.createElement("th", null, "Race Name"), 
                React.createElement("th", null, "Event"), 
                React.createElement("th", null, "Finish Time")
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



define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot',
  ], function($, _, Backbone, React, ReactBoot){

    var RacesSubTable = React.createClass({displayName: 'RacesSubTable',
       
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
            
            React.createElement("div", {id: "runnerTableComponent"}, 
              React.createElement(Table, {id: "myTable"}, 
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

    return RunnerTable;
});



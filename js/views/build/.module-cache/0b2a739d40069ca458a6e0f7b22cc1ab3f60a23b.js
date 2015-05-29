define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot',
  'views/build/splitstable'
  ], function($, _, Backbone, React, ReactBoot, SplitsTable){

    var RacesTable = React.createClass({displayName: 'RacesTable',
            
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
              ), 
              React.createElement(SplitsTable, {allSplits: this.state.allSplits})
            )              
          )
      }
    });

    return RacesTable;
});



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
            allSplits: []            
        };
      },

      handleSelect: function(i) {

        $($("#myRaceSumTable tbody tr")[i]).toggleClass("info");;

        var rrID = this.props.races[i].runInRaceID;
        
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
            
            React.createElement("div", null, 
              React.createElement(Table, {id: "myRaceSumTable"}, 
              React.createElement("thead", null, 
                React.createElement("tr", null, 
                React.createElement("th", null, "First Name"), 
                React.createElement("th", null, "Last Name"), 
                React.createElement("th", null, "Finish Time")
              )
              ), 
              React.createElement("tbody", null, 
                this.props.runners.map(function(runner, i) {
                      return (React.createElement("tr", {onClick: this.handleSelect.bind(this, i), key: i}, 
                                React.createElement("td", null, 
                                runner.firstName
                                ), 
                                React.createElement("td", null, 
                                runner.lastName
                                ), 
                                React.createElement("td", null, 
                                runner.finishTime
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



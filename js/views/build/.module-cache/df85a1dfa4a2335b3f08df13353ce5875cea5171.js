define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'views/build/runnertablerow',
  'reactboot',
  ], function($, _, Backbone, React, RunnerTableRow, ReactBoot){

    var tmpRunnersArray = [];
    var RunnerTable = React.createClass({displayName: 'RunnerTable',
       
      handleSelect: function(i) {
        $($("#myTable tbody tr")[i]).toggleClass("info");;
        
        var myRunner = this.props.runners[i];
        tmpRunnersArray.push(myRunner);
        
        //var myRunner = this.props.runners[i];
      },

      handleMySubmit: function() {
        //tmpRunnersArray.toJSON();
        this.props.onTeamSubmit({teamRunners: tmpRunnersArray});
      },

      render: function() {
        var Table = ReactBoot.Table;

        var rows = [];
        this.props.runners.forEach(function(runner) {
            rows.push(React.createElement(RunnerTableRow, {runner: runner, key: runner.id}));
        });

        return (
            
            React.createElement("div", {id: "runnerTableComponent"}, 
              React.createElement("button", {className: "btn btn-primary", onClick: this.handleMySubmit}, "Submit"), 
              React.createElement(Table, {id: "myTable"}, 
              React.createElement("thead", null, 
                React.createElement("tr", null, 
                React.createElement("th", null, "First Name"), 
                React.createElement("th", null, "Last Name"), 
                React.createElement("th", null, "School")
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
                                runner.schoolName
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



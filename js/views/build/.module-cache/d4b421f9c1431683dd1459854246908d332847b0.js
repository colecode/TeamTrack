define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'views/build/runnertablerow',
  'reactboot'
  ], function($, _, Backbone, React, RunnerTableRow, ReactBoot){

    var RunnerTable = React.createClass({displayName: 'RunnerTable',
       
      render: function() {
        var Table = ReactBoot.Table;

        var rows = [];
        this.props.runners.forEach(function(runner) {
            rows.push(React.createElement(RunnerTableRow, {runner: runner, key: runner.id}));
        });

        return (
          
            React.createElement("div", {id: "runnerTableComponent"}, 
              React.createElement(Table, {striped: true, condensed: true, hover: true}, 
                this.props.runners.map(function(runner, i) {
                      return (React.createElement("tr", null, 
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
      }
    });

    return RunnerTable;
  });

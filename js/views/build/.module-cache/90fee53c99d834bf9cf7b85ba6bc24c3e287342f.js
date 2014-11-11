define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'views/build/runnertablerow'
  ], function($, _, Backbone, React, RunnerTableRow){

    var RunnerTable = React.createClass({displayName: 'RunnerTable',

      render: function() {

        var rows = [];
        this.props.runners.forEach(function(runner) {
            rows.push(React.createElement(RunnerTableRow, {runner: runner, key: runner.first}));
        });
        return (
          
            React.createElement("div", {id: "runnerTableComponent"}, 
              React.createElement("table", {class: "table"}, 
                rows
              )
            )          
          
          )
      }
    });

    return RunnerTable;
  });

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
        console.log(this.props.myModel);
        console.log(this.props.collection);
        this.props.runners.forEach(function(runner) {
            console.log(runner);
            rows.push(React.createElement(RunnerTableRow, {runner: runner, key: runner.id}));
        });
        return (
          
            React.createElement("div", {id: "runnerTableComponent"}, 
              React.createElement("table", {className: 'table'}, 
                rows
              )
            )              
          )
      }
    });

    return RunnerTable;
  });

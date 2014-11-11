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
        
        rows.push(React.createElement(RunnerTableRow, {runner: this.props.runners, key: this.props.runners.id}));
        
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

// this.props.runners.forEach(function(runner) {
//             rows.push(<RunnerTableRow runner={runner} key={runner.id} />);
//         });

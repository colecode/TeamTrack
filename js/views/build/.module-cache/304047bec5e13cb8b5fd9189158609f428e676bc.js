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

        return (
          
            React.createElement("div", {id: "runnerTableComponent"}, 
              React.createElement("table", {class: "table"}, 
                React.createElement(RunnerTableRow, null)
              )
            )          
          
          )
      }
    });

    return RunnerTable;
  });

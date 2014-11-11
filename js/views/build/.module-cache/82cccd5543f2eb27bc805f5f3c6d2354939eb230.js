define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react'
  ], function($, _, Backbone, React){

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

define(
  [
  'jquery',
  'underscore',
  'react'
  ], function($, _, React){

    var RunnerTableRow = React.createClass({displayName: 'RunnerTableRow',

      render: function() {

        return (
          
            React.createElement("tr", null, 
              React.createElement("td", null, "Josh Black")
            )        
          
          )
      }
    });

    return RunnerTableRow;
  });
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
              React.createElement("td", null, this.props.first), 
              React.createElement("td", null, this.props.last), 
              React.createElement("td", null, this.props.school)
            )        
          
          )
      }
    });

    return RunnerTableRow;
  });
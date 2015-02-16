define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'views/build/runnertablerow',
  'reactboot',
  ], function($, _, Backbone, React, RunnerTableRow, ReactBoot){

    var RunnerTable = React.createClass({displayName: 'RunnerTable',
       
      handleSelect: function(i) {
        $($("#myTable tbody tr")[i]).toggleClass("info");;
        
        // Index of object
        var a = this.props.selectedRunners.indexOf(this.props.runners[i]);
        
        // If object does not exist in array, add it
        if(a == -1)
        {
          this.props.selectedRunners.push(this.props.runners[i]); 
        }
        // Remove it
        else
        {
          this.props.selectedRunners.splice(a,1);
        }
              
      },

      render: function() {
        var Table = ReactBoot.Table;

        return (
            
            React.createElement("div", {id: "runnerTableComponent"}, 
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



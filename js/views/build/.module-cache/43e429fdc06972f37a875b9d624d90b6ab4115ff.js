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
        
        //var myRunner = this.props.runners[i];
        //tmpRunnersArray.push(myRunner); 
        this.props.selectedRunners.push(this.props.runners[i]);       
      },

      render: function() {

        var Table = ReactBoot.Table;
        var rows = [];
        var myParent = this;

        function selectRow() {
          myParent.props.onDomainSelect({selectedDomain:this.children})
        }

        this.props.runners.map(function(runner,i) {
            rows.push(React.createElement("tr", {onClick: selectRow, key: i}, 
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
        });

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
              React.createElement("tbody", null

              )
              )
            )              
          )
      }
    });

    return RunnerTable;
});



define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react'
  ], function($, _, Backbone, React){
    
  
    var TMRunnersTable = React.createClass({displayName: "TMRunnersTable",

      handleSelect: function(i) {

          var selectedRunner = this.props.teamRunners[i];
          this.props.handleRunnerSelect(selectedRunner.runnerID);
      },

      render: function() {
       
        return (          
            React.createElement("div", {className: "small-table"}, 
              React.createElement("table", {className: "table table-responsive"}, 
                React.createElement("thead", null, 
                  React.createElement("tr", null, 
                    React.createElement("th", {className: "centered"}, "Name")
                  )
                ), 
                React.createElement("tbody", null, 
                  this.props.teamRunners.map(function(runner, i) {
                      
                      return (React.createElement("tr", {onClick: this.handleSelect.bind(this, i), key: i}, 
                                React.createElement("td", null, 
                                runner.firstName, " ", runner.lastName
                                ), 
                                React.createElement("td", null, 
                                "Remove From Team"
                                )
                              ));
                    },this)
                )
              )

            )          
        )
      }

    });

    return TMRunnersTable;

  });

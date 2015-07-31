define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react'
  ], function($, _, Backbone, React){
    
    var TMRunnersTable = React.createClass({displayName: "TMRunnersTable",

      handleSelect: function(i) {
        console.log('selected runner from table');  
      },

      render: function() {
       
        return (          
            React.createElement("div", null, 
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
                                "View Profile"
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

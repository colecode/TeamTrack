define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot'
  ], function($, _, Backbone, React, ReactBoot){
    
    var TeamCardClass = React.createClass({displayName: "TeamCardClass",

      render: function() {
        
        var Well = ReactBoot.Well;
        var Table = ReactBoot.Table;
        
        var headerStyle = {
          marginTop: '0'
        };
        var wellStyle = {
          backgroundColor: '#4CDA84'
        };

        return (  
       
          React.createElement("div", null, 
            React.createElement(Well, {style: wellStyle}, 
              React.createElement("h3", {style: headerStyle}, "Team Card"), 
              React.createElement("div", null, 
                React.createElement("p", null, this.props.teamName)
              ), 
              React.createElement("div", null, 
                React.createElement("p", null, this.props.stateName)
              ), 
              React.createElement("div", null, 
               React.createElement("p", null, this.props.schoolName, "  ")
              ), 
              React.createElement(Table, {id: "card-runners-table"}, 
                React.createElement("thead", null, 
                  React.createElement("tr", null, 
                    React.createElement("th", null, "First Name"), 
                    React.createElement("th", null, "Last Name")
                  )
                ), 
                React.createElement("tbody", null, 
                  this.props.selectedRunners.map(function(runner, i) {
                      return (React.createElement("tr", {key: i}, 
                                React.createElement("td", null, 
                                runner.firstName
                                ), 
                                React.createElement("td", null, 
                                runner.lastName
                                )
                              ));
                    },this)
                )
              )
            )
        )        
        )
      }

    });

    return TeamCardClass;

  });

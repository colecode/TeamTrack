define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot',
  ], function($, _, Backbone, React, ReactBoot){

    var SplitsTable = React.createClass({displayName: "SplitsTable",
      
      render: function() {
        var Table = ReactBoot.Table;

        return (
            
            React.createElement("div", null, 
              React.createElement(Table, null, 
              React.createElement("thead", null, 
                React.createElement("tr", null, 
                React.createElement("th", null, "Split Number"), 
                React.createElement("th", null, "Split Time")
              )
              ), 
              React.createElement("tbody", null, 
                this.props.allSplits.map(function(split, j) {
                      return (React.createElement("tr", null, 
                                React.createElement("td", null, 
                                split.splitIndex
                                ), 
                                React.createElement("td", null, 
                                split.splitTime
                                )
                              ));
                    },this)
                )
              )
            )              
          )
      }
    });

    return SplitsTable;
});



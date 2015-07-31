define(
  [
  'jquery',
  'underscore',
  'react'
  ], function($, _, React){

    var SplitsTable = React.createClass({displayName: "SplitsTable",
      
      render: function() {

        return (
            
            React.createElement("div", {className: "medium-table"}, 
              React.createElement("table", {className: "table table-responsive"}, 
              React.createElement("thead", null, 
                React.createElement("tr", null, 
                React.createElement("th", {className: "centered"}, "Split Number"), 
                React.createElement("th", {className: "centered"}, "Split Time")
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



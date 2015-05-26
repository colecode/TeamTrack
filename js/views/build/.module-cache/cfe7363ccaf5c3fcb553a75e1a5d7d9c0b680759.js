define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot',
  ], function($, _, Backbone, React, ReactBoot){

    var SplitsTable = React.createClass({displayName: 'SplitsTable',
       
      render: function() {
        var Table = ReactBoot.Table;

        return (
            
            React.createElement("div", {id: "splitsTableComponent"}, 
              React.createElement(Table, {id: "myTable"}, 
              React.createElement("thead", null, 
                React.createElement("tr", null, 
                React.createElement("th", null, "Split Number"), 
                React.createElement("th", null, "Split Time"), 
                React.createElement("th", null, "Difference"), 
                React.createElement("th", null, "Current Total")
              )
              ), 
              React.createElement("tbody", null, 
                this.props.splits.map(function(split, i) {
                      return (React.createElement("tr", {onClick: this.handleSelect.bind(this, i), key: i}, 
                                React.createElement("td", null, 
                                split.splitIndex
                                ), 
                                React.createElement("td", null, 
                                split.splitTime
                                ), 
                                React.createElement("td", null, 
                                split.splitDiff
                                ), 
                                React.createElement("td", null, 
                                split.splitTotal
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



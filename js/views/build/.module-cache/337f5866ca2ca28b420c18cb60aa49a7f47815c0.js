define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot',
  ], function($, _, Backbone, React, ReactBoot){

    var SplitsTable = React.createClass({displayName: 'SplitsTable',
       

      loadDataFromServer: function() {
        
        $.ajax({
          url:"api/index.php/getsplits/" + raceId,
          type:"GET",
          success:function(data){            
            this.setState({allSplits: data});  
            //allRows = data;
          }.bind(this),     
          dataType:"json"
        });

      },

      // Called immediately when the React class is rendered - better option than passing in loaded domain arrays from via Backbone View
      componentDidMount: function() {
        this.loadDataFromServer();
      },
       
      render: function() {
        var Table = ReactBoot.Table;

        return (
            
            React.createElement("div", {id: "splitsTableComponent"}, 
              React.createElement(Table, {id: "mySplitsTable"}, 
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



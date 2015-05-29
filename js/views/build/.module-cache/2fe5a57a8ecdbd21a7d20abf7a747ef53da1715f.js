define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'reactboot',
  ], function($, _, Backbone, React, ReactBoot){

    var SplitsTable = React.createClass({displayName: 'SplitsTable',
       
      getInitialState: function () {
        return {
            allSplits:[]
          };
      },

      loadDataFromServer: function() {
        
        var test = this.props.raceParentID[0];
        if(test)
        {
        $.ajax({
          url:"api/index.php/getsplits/" + test,
          type:"GET",
          success:function(data){            
            this.setState({allSplits: data});  
          }.bind(this),     
          dataType:"json"
        });
      }

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
                React.createElement("th", null, "Split Time")
              )
              ), 
              React.createElement("tbody", null, 
                this.state.allSplits.map(function(split, i) {
                      return (React.createElement("tr", {onClick: this.handleSelect.bind(this, i), key: i}, 
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



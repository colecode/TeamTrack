define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot){
    
    var schoolID = -1;

    var SimpleRunnersTableClass = React.createClass({displayName: "SimpleRunnersTableClass",

      mixins: [backboneMixin],

      getInitialState: function () {
        return {
            selectedRunners:[],
            allRunners:[]
        };
      },

       handleSelect: function(i) {
        $($("#simple-runners-table tbody tr")[i]).toggleClass("info");;
        
        // Index of object
        var a = this.props.selectedRunners.indexOf(this.props.allRunners[i]);
        
        // If object does not exist in array, add it
        if(a == -1)
        {
          this.props.selectedRunners.push(this.props.allRunners[i]); 
        }
        // Remove it
        else
        {
          this.props.selectedRunners.splice(a,1);
        }
              
      },

      render: function() {
       
        //var Table = ReactBoot.Table;
        var Button = ReactBoot.Button;
        var smallScrollTable = {height:100};

        return (          
            React.createElement("div", {className: "small-table"}, 
              React.createElement("table", {id: "simple-runners-table", className: "table table-bordered"}, 
                React.createElement("thead", null, 
                  React.createElement("tr", null, 
                    React.createElement("th", null, "First Name"), 
                    React.createElement("th", null, "Last Name")
                  )
                ), 
                React.createElement("tbody", null, 
                  this.props.allRunners.map(function(runner, i) {
                      return (React.createElement("tr", {onClick: this.handleSelect.bind(this, i), key: i}, 
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
      }

    });

    return SimpleRunnersTableClass;

  });

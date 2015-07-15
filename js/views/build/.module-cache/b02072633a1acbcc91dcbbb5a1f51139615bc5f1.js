define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot',
  'mdl'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot, MDL){
    
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
        $($("#myTable tbody tr")[i]).toggleClass("info");;
        
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

      loadListfromServer: function() {
        
        $.ajax({
          url:"api/index.php/runnersperschool",
          type:"GET",
          success:function(data){
            this.setState({allRunners: data});
          }.bind(this),     
          dataType:"json"
        });
      },

      componentDidMount: function() {
        //this.loadListfromServer();
      },

      render: function() {
       
        //var Table = ReactBoot.Table;
        var Button = ReactBoot.Button;
        return (          
            React.createElement("div", null, 
              React.createElement("table", {class: "mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp"}, 
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

define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot',
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
        this.loadListfromServer();
      },

      render: function() {
       
        var Table = ReactBoot.Table;

        return (          
            React.createElement("div", null, 
            React.createElement(Table, null, 
              React.createElement("thead", null, 
                React.createElement("tr", null, 
                React.createElement("th", null, "First Name"), 
                React.createElement("th", null, "Last Name"), 
                React.createElement("th", null, "School"), 
                React.createElement("th", null, "Gender")
              )
              ), 
              React.createElement("tbody", null, 
                this.props.runners.map(function(runner, i) {
                      return (React.createElement("tr", {onClick: this.handleSelect.bind(this, i), key: i}, 
                                React.createElement("td", null, 
                                runner.firstName
                                ), 
                                React.createElement("td", null, 
                                runner.lastName
                                ), 
                                React.createElement("td", null, 
                                runner.schoolName
                                ), 
                                React.createElement("td", null, 
                                runner.gender
                                )
                              ));
                    },this)
                )
              ), 
                React.createElement(RunnerTable, {selectedRunners: this.state.selectedRunners, runners: this.state.allRunners})
            )          
        )
      }

    });

    return SimpleRunnersTableClass;

  });

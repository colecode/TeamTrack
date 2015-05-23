define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot',
  'fixeddatatable'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot, FixedDataTable){

    var runnerId = -1;

    var RunnerProfileClass = React.createClass({displayName: 'RunnerProfileClass',

      mixins: [backboneMixin],
      mixins: [React.addons.LinkedStateMixin],

      getInitialState: function () {
        return {
            firstName: '',
            lastName: '',
            age: '',  
            stateName:'',
            schoolName: ''   
        };
      },

      loadDataFromServer: function() {
        
        $.ajax({
          url:"api/index.php/getprofile/" + runnerId,
          type:"GET",
          success:function(data){            
            this.setState({firstName: data[0].firstName});
            this.setState({lastName: data[0].lastName});
            this.setState({schoolName: data[0].schoolName});
            this.setState({stateName: data[0].stateName});
          }.bind(this),     
          dataType:"json"
        });

      },

      // Called immediately when the React class is rendered - better option than passing in loaded domain arrays from via Backbone View
      componentDidMount: function() {
        this.loadDataFromServer();
      },

      render: function() {

        var Label = ReactBoot.Label;

        return (

          React.createElement("div", {className: 'left-align-container'}, 
          React.createElement("div", {id: "profile-header"}, 
            React.createElement("h3", null, "Runner Profile"), 
            React.createElement("div", {className: 'input-group margin-bottom-sm form-field-sizes'}, 
              React.createElement("h4", null, "First Name: ", this.state.firstName), 
              React.createElement("h4", null, "Last Name: ", this.state.lastName), 
              React.createElement("h4", null, "School Name: ", this.state.schoolName), 
              React.createElement("h4", null, "State Name: ", this.state.stateName)
            )
          ), 
          React.createElement("div", {id: "races-box"}, 
            React.createElement("h3", null, "Races"), 
              React.createElement(RacesSubTable, null)
          )
          )
        )
      }

    });
    
    var RunnerProfileView = Backbone.View.extend({
    
      el: $('#mainContent'),
      events: {
        
      },

      initialize: function(options) { 

          if(options)
          {
            runnerId = options.runnerId;
          }
        },

      render: function (){
        
        React.render(       
          React.createElement(RunnerProfileClass, null),
          this.el
        );
      } 
    });

    return RunnerProfileView;
  });


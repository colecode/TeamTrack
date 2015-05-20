define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot',
  ], function($, _, Backbone, React, backboneMixin, ReactBoot){

    var runnerId = -1;

    var RunnerProfileClass = React.createClass({displayName: 'RunnerProfileClass',

      mixins: [backboneMixin],
      mixins: [React.addons.LinkedStateMixin],

      getInitialState: function () {
        return {
            firstName: 'Hank',
            lastName: 'McCoy',
            age: '',  
            stateName:'',
            schoolName: ''       
        };
      },

      // Load Dmns for dropdowns
      loadDomainsFromServer: function() {
        
        // $.ajax({
        //   url:"api/index.php/dmnStates",
        //   type:"GET",
        //   success:function(data){
        //     this.setState({dmnArray_States: data});
        //   }.bind(this),     
        //   dataType:"json"
        // });

      },

      // Called immediately when the React class is rendered - better option than passing in loaded domain arrays from via Backbone View
      componentDidMount: function() {
        this.loadDomainsFromServer();
      },

      render: function() {

        return (

          React.createElement("div", {className: 'form-box-wrap'}, 
            React.createElement("h3", null, "Runner Profile"), 
            React.createElement("div", {className: 'input-group margin-bottom-sm form-field-sizes'}, 
              React.createElement("h5", null, "First Name"), 
              React.createElement("label", {className: 'form-control text-center', valueLink: this.linkState('firstName')})
            ), 
            React.createElement("div", {className: 'input-group margin-bottom-sm form-field-sizes'}, 
              React.createElement("h5", null, "Last Name"), 
              React.createElement("label", {className: 'form-control text-center', valueLink: this.linkState('lasttName')})
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


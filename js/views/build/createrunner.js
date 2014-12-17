define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'models/runner'
  ], function($, _, Backbone, React, backboneMixin, RunnerModel){

    // Initialize the model here so it's scope can be reached in MyWidget
    var masterModel;

    var CreateRunnerModel = Backbone.Model.extend({
      defaults: {
        id: "1",
        firstName: "Harry", 
        lastName: "Potter",
        aSchool: "Hogwarts"
      },
      url: 'api/index.php/runners'
    });

    // Used to hold the STATE of the inputs
    // var CreateRunnerParent = React.createClass({

    //   getInitialState: function() {
    //     return {
    //       firstName: '',
    //       lastName: '',
    //       aSchool: ''
    //     };
    //   },

    //   render: function() {
    //     return (<CreateRunnerMaster 
    //                 firstName={this.state.firstName}
    //                 lastName={this.state.lastName}
    //                 aSchool={this.state.aSchool}/>)
    //   }

    // });

    // Holds the UI and data-bind
    var CreateRunnerMaster = React.createClass({displayName: 'CreateRunnerMaster',

      mixins: [backboneMixin],

      handleClick: function() {

        console.log('submit clicked!');
        console.log(masterModel);     

      },

      handleChange: function(e) {

      },

      render: function() {
        console.log(masterModel);
        return (
          React.createElement("div", {className: 'my-container'}, 
            React.createElement("div", {className: 'wrap'}, 
            React.createElement("form", {role: "form"}, 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("label", null, "First name"), 
                React.createElement("input", {type: "text", className: "form-control", id: "createRunnerFirst", placeholder: "First name", defaultValue: this.props.firstName})
              ), 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("label", null, "Last name"), 
                React.createElement("input", {type: "text", className: "form-control", id: "createRunnerLast", placeholder: "Last name", defaultValue: this.props.lastName})
              ), 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("label", null, "School"), 
                React.createElement("input", {type: "text", className: "form-control", id: "createRunnerSchool", placeholder: "School", defaultValue: this.props.aSchool})
              ), 
              React.createElement("div", {className: "text-center"}, 
                React.createElement("button", {className: "btn btn-primary", onClick: this.handleClick}, "Submit")
              )
            )
            )
          )
          )
      }
    });

    var CreateRunnerView = Backbone.View.extend({
      
      el: $('#mainContent'),
      events: {
          // none
      },

      initialize: function() {
          // none
          masterModel = new CreateRunnerModel();
      },

      render: function (){
        
        React.render(       
          React.createElement(CreateRunnerMaster, {model: masterModel}),
          this.el
        );
      } 

      });

    return CreateRunnerView;
  });


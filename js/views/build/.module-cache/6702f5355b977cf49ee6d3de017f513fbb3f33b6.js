define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'models/createRunnerModel',
  'reactboot',
  'views/build/dropdownContainer'
  ], function($, _, Backbone, React, backboneMixin, CreateRunnerModel, ReactBoot, DropdownContainer){

    var CreateRunnerMaster = React.createClass({displayName: 'CreateRunnerMaster',

      mixins: [backboneMixin],
      mixins: [React.addons.LinkedStateMixin],

      getInitialState: function () {
        return {
            firstName: '',
            lastName: '',
            schoolName: 'Select school',
            stateName:'Select state',
            dmnArray_Schools:[],
            dmnArray_States:[] 
        };
      },

      // Load Dmns for dropdowns
      loadDomainsFromServer: function() {
        
        $.ajax({
          url:"api/index.php/dmnSchools",
          type:"GET",
          success:function(data){
           this.setState({dmnArray_Schools: data});
         }.bind(this),     
         dataType:"json"
        });

        $.ajax({
          url:"api/index.php/dmnStates",
          type:"GET",
          success:function(data){
            this.setState({dmnArray_States: data});
          }.bind(this),     
          dataType:"json"
        });

      },

      handleSubmit: function() {

        var myRunner = new CreateRunnerModel({'fName':this.state.firstName, 'lName':this.state.lastName, 'sName':this.state.schoolName});

        myRunner.save(null, {
          success:function(model, response) {
            swal({title:"", text: "Successfully created new runner!", type:"success", timer: 2000 });
          },
          error: function(model, error) {
            sweetAlert("Oops!", "An error occured while creating a new runner!", "error");
            console.log(error);
          }
        });
      },

      handleSelect_dmnSchools: function(val) {
        this.setState({schoolName: val.selectedDomain });
      },

      handleSelect_dmnStates: function(val) {
        this.setState({ stateName: val.selectedDomain });
      },

      // Called immediately when the React class is rendered - better option than passing in loaded domain arrays from via Backbone View
      componentDidMount: function() {
        this.loadDomainsFromServer();
      },

      render: function() {

        var MenuItem = ReactBoot.MenuItem;
        var DropdownButton = ReactBoot.DropdownButton;
        var Button = ReactBoot.Button;

        return (
          React.createElement("div", {className: 'my-container'}, 
            React.createElement("div", {className: 'wrap'}, 
            React.createElement("form", {role: "form"}, 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("label", null, "First name"), 
                React.createElement("input", {type: "text", className: "form-control", valueLink: this.linkState('firstName')})
              ), 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("label", null, "Last name"), 
                React.createElement("input", {type: "text", className: "form-control", valueLink: this.linkState('lastName')})
              ), 
              React.createElement("div", {className: "form-group"}, 

                React.createElement("label", null, "State"), React.createElement("br", null), 
                React.createElement(DropdownContainer, {dmnArray: this.state.dmnArray_States, menuTitle: this.state.stateName, onDomainSelect: this.handleSelect_dmnStates})

              ), 
              React.createElement("div", {className: "form-group"}, 

                React.createElement("label", null, "School"), React.createElement("br", null), 
                React.createElement(DropdownContainer, {dmnArray: this.state.dmnArray_Schools, menuTitle: this.state.schoolName, onDomainSelect: this.handleSelect_dmnSchools})

              ), 
              
              React.createElement("div", {style: submitBtnStyle}, 
                React.createElement(Button, {bsStyle: "primary", bsSize: "large", block: true, onClick: this.handleSubmit}, "Create Runner")
              )
            )
            )
          )
        )
      },

      // No longer used - leave as an example
      onFirstNameChange: function (e) {
        this.setState({ firstName: e.target.value });
      }   

    });
    
    var CreateRunnerView = Backbone.View.extend({
    
      el: $('#mainContent'),
      events: {
      },

      initialize: function() {  
 
      },

      render: function (){
        
        React.render(       
          React.createElement(CreateRunnerMaster, null),
          this.el
        );
      } 
    });

    return CreateRunnerView;
  });


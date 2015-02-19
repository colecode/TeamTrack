define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'models/createRunnerModel',
  'reactboot',
  'views/build/dropdownContainer',
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
            dmnArray_States:[] ,
            disableDropdown: 1,
            schoolCode:'',
            disableNextButton:'false',
        };
      },

      // Load Dmns for dropdowns
      loadDomainsFromServer: function() {
        
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

        var myRunner = new CreateRunnerModel({'fName':this.state.firstName, 'lName':this.state.lastName, 'sCode':this.state.schoolCode});

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
        this.setState({schoolName: val.selectedDomain.children });
        this.setState({schoolCode: val.selectedDomain.domainCode});
      },

      handleSelect_dmnStates: function(val) {
        this.setState({ stateName: val.selectedDomain.children });
        this.setState({ schoolName: 'Select school' });

        $.ajax({
          url:"api/index.php/dmnSchools/" + val.selectedDomain.domainCode,
          type:"GET",
          success:function(data){

            this.setState({disableDropdown: 0});
            this.setState({dmnArray_Schools: data});

          }.bind(this), 
          error:function(err) {
            
            console.log('error retrieving school dropdown');
            console.log(err);
          },   
         dataType:"json"
        });

      },

      // Called immediately when the React class is rendered - better option than passing in loaded domain arrays from via Backbone View
      componentDidMount: function() {
        this.loadDomainsFromServer();
        $("#pageHeader").html("Step 1: Add runners to the database");
        $("#mainPageBar").show();
        $("#bufferDiv").show();
      },

      render: function() {

        var MenuItem = ReactBoot.MenuItem;
        var DropdownButton = ReactBoot.DropdownButton;
        var Button = ReactBoot.Button;
        var ButtonToolbar = ReactBoot.ButtonToolbar;
        var ButtonGroup = ReactBoot.ButtonGroup;

        var submitBtnStyle = {paddingTop: 100};
        var nextBtnStyle = {paddingTop: 30};
        var btnWidth = {width:400};

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
                React.createElement(DropdownContainer, {disabled: this.state.disableDropdown, dmnArray: this.state.dmnArray_Schools, menuTitle: this.state.schoolName, onDomainSelect: this.handleSelect_dmnSchools})
              ), 
              
              React.createElement(ButtonGroup, null, 
                React.createElement(Button, {bsStyle: "primary", bsSize: "large", style: btnWidth, onClick: this.handleSubmit}, "Create Runner"), 
                React.createElement(Button, {bsStyle: "success", bsSize: "large", href: "#createteam"}, "Next")
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


define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'models/createRunnerModel',
  'reactboot',
  'views/build/dropdowncontainer',
  ], function($, _, Backbone, React, backboneMixin, CreateRunnerModel, ReactBoot, DropdownContainer){

    var CreateRunnerMaster = React.createClass({displayName: "CreateRunnerMaster",

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
            schoolCode:''          
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
      },

      render: function() {

        // var MenuItem = ReactBoot.MenuItem;
        // var DropdownButton = ReactBoot.DropdownButton;
        var Button = ReactBoot.Button;
        // var ButtonGroup = ReactBoot.ButtonGroup;

        // var btnBlockBuffer = {paddingTop: 100};
        // var myWidth = $(".wrap").width() / 2;
        
        // var wrapWidth = {width:myWidth};

        return (

          React.createElement("div", {className: 'form-box-wrap'}, 
            React.createElement("h3", null, "Create Runner"), 
            React.createElement("div", {className: 'input-group margin-bottom-sm form-field-sizes'}, 
              React.createElement("input", {className: 'form-control text-center', type: "text", placeholder: "First name", valueLink: this.linkState('firstName')})
            ), 
            React.createElement("div", {className: 'input-group margin-bottom-sm form-field-sizes'}, 
              React.createElement("input", {className: 'form-control text-center', type: "text", placeholder: "Last name", valueLink: this.linkState('lastName')})
            ), 
            React.createElement("div", {className: 'input-group form-field-sizes'}, 
              React.createElement(DropdownContainer, {dmnArray: this.state.dmnArray_States, menuTitle: this.state.stateName, onDomainSelect: this.handleSelect_dmnStates})
            ), 
            React.createElement("div", {className: 'input-group form-field-sizes'}, 
              React.createElement(DropdownContainer, {disabled: this.state.disableDropdown, dmnArray: this.state.dmnArray_Schools, menuTitle: this.state.schoolName, onDomainSelect: this.handleSelect_dmnSchools})
            ), 
            React.createElement("div", {className: 'input-group form-field-sizes'}, 
              React.createElement("button", {className: 'btn btn form-control form-save-btn', onClick: this.handleSubmit}, "Save")
            ), 
            React.createElement("div", {className: 'input-group form-field-sizes'}, 
              React.createElement(Button, {className: 'btn btn form-control form-save-btn', href: "#createteam"}, "Next")
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


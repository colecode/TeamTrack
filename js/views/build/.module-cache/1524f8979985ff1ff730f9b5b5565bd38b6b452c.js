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

    var CreateRunnerClass = React.createClass({displayName: "CreateRunnerClass",

      mixins: [backboneMixin],
      mixins: [React.addons.LinkedStateMixin],

      getInitialState: function () {
        return {
            firstName: '',
            lastName: '',
            dmnArray_Gender:[],
            genderName: 'Select gender',
            schoolCode:''          
        };
      },

      // Load Dmns for dropdowns
      loadDomainsFromServer: function() {
        
        $.ajax({
          url:"api/index.php/dmnGender",
          type:"GET",
          success:function(data){
            this.setState({dmnArray_Gender: data});
          }.bind(this),     
          dataType:"json"
        });

      },

      handleSubmit: function() {

        // var myRunner = new CreateRunnerModel({'fName':this.state.firstName, 'lName':this.state.lastName, 'sCode':this.state.schoolCode});

        // myRunner.save(null, {
        //   success:function(model, response) {
        //     swal({title:"", text: "Successfully created new runner!", type:"success", timer: 2000 });
        //   },
        //   error: function(model, error) {
        //     sweetAlert("Oops!", "An error occured while creating a new runner!", "error");
        //     console.log(error);
        //   }
        // });

        var myParent = this;

        var myRunner = new CreateRunnerModel({'firstName':this.state.firstName, 'lastName':this.state.lastName, 'fk_schoolID':this.props.schoolCode, 'gender':this.state.genderName});
        myRunner.save(null, {
          success:function(model, response) {
            this.props.handleCreateRunner();
          },
          error: function(model, error) {
            
            console.log(error);
          }
        });   
      },

      handleSelect_dmnGender: function(val) {
        this.setState({ genderName: val.selectedDomain.children});
      },

      // Called immediately when the React class is rendered - better option than passing in loaded domain arrays from via Backbone View
      componentDidMount: function() {
        this.loadDomainsFromServer();
      },

      render: function() {

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
              React.createElement(DropdownContainer, {dmnArray: this.state.dmnArray_Gender, menuTitle: this.state.genderName, onDomainSelect: this.handleSelect_dmnGender})
            ), 
            React.createElement("div", {className: 'input-group form-field-sizes'}, 
              React.createElement("button", {className: 'btn btn form-control form-save-btn', onClick: this.handleSubmit}, "Create Runner")
            )
          )
        )
      }
    });

    return CreateRunnerClass;

  });


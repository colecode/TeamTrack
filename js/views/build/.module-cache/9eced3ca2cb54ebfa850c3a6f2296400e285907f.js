define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'models/createRunnerModel',
  'collections/dropdownCollection',
  'views/build/dropdownContainer',
  'reactboot'
  ], function($, _, Backbone, React, backboneMixin, CreateRunnerModel, DropdownCollection, DropdownContainer, ReactBoot){

    //var dropdownCollection;
    //var states_dropdownCollection;
    var dmnArray_Schools = [];
    var dmnArray_States = [];

    var CreateRunnerMaster = React.createClass({displayName: 'CreateRunnerMaster',

      mixins: [backboneMixin],
      mixins: [React.addons.LinkedStateMixin],

      getInitialState: function () {
        return {
            firstName: '',
            lastName: '',
            schoolName: '',
            stateName:''  
        };
      },

      handleSubmit: function() {

        myRunner = new CreateRunnerModel({'fName':this.state.firstName, 'lName':this.state.lastName, 'sName':this.state.schoolName});

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

      render: function() {

        var MenuItem = ReactBoot.MenuItem;
        var DropdownButton = ReactBoot.DropdownButton;
        var rows = [];

        this.props.dmnArray_Schools.forEach(function(domainVal, i) {
            rows.push(React.createElement(MenuItem, {key: i}, domainVal.description))
        });
        
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
                React.createElement("label", null, "School"), React.createElement("br", null), 
                
                React.createElement(DropdownButton, {bsStyle: "primary", title: "School", style: {width : 100}}, 
                
                rows

                )
                  
              ), 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("label", null, "State"), React.createElement("br", null), 
                React.createElement("ul", {className: "list-inline"}, 
                  React.createElement("li", null, 
                    React.createElement(DropdownContainer, {allDomains: this.props.dmnArray_States, dropTitle: "State"})
                  ), 
                  React.createElement("li", null, 
                    React.createElement("input", {type: "text", readOnly: "True", className: "form-control", value: this.props.stateName})
                  )
                )
              ), 
              React.createElement("div", {className: "text-center"}, 
                React.createElement("button", {className: "btn btn-primary", onClick: this.handleSubmit}, "Submit")
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

        $.ajax({
            url:"api/index.php/dmnSchools",
            type:"GET",
            async:false,
            success:function(msg){
               dmnArray_Schools = msg;
            },
            dataType:"json"
        });

        $.ajax({
            url:"api/index.php/dmnStates",
            type:"GET",
            async:false,
            success:function(msg){
              dmnArray_States = msg;
            },
            dataType:"json"
        });

        
      },

      render: function (){
        
        React.render(       
          React.createElement(CreateRunnerMaster, {dmnArray_Schools: dmnArray_Schools, dmnArray_States: dmnArray_States}),
          this.el
        );
      } 
    });

    return CreateRunnerView;
  });


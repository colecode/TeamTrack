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

    var dropdownCollection;

    var CreateRunnerMaster = React.createClass({displayName: 'CreateRunnerMaster',

      mixins: [backboneMixin],

      getInitialState: function () {
        return {
            firstName: '',
            lastName: '',
            schoolName: ''    
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
        var Button = ReactBoot.Button;
        return (
          React.createElement("div", {className: 'my-container'}, 
            React.createElement("div", {className: 'wrap'}, 
            React.createElement("form", {role: "form"}, 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("label", null, "First name"), 
                React.createElement("input", {type: "text", className: "form-control", value: this.props.firstName, onChange: this.onFirstNameChange})
              ), 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("label", null, "Last name"), 
                React.createElement("input", {type: "text", className: "form-control", value: this.props.lastName, onChange: this.onLastNameChange})
              ), 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("label", null, "School"), 
                React.createElement("input", {type: "text", className: "form-control", value: this.props.schoolName, onChange: this.onSchoolNameChange})
              ), 
              React.createElement("div", {className: "text-center"}, 
                React.createElement("button", {className: "btn btn-primary", onClick: this.handleSubmit}, "Submit")
              ), 

              React.createElement(Button, {bsSize: "large", active: true}, "Button")
              
            )
            )
          )
        )
      },

      onFirstNameChange: function (e) {
        this.setState({ firstName: e.target.value });
      },

      onLastNameChange: function (e) {
        this.setState({ lastName: e.target.value });
      },

      onSchoolNameChange: function (e) {
        this.setState({ schoolName: e.target.value });
      }

    });

    //<DropdownContainer allDomains={this.props.collection} />
    
    var CreateRunnerView = Backbone.View.extend({
    
      el: $('#mainContent'),
      events: {
      },

      initialize: function() {  

        dropdownCollection = new DropdownCollection(); 
        dropdownCollection.url = 'api/index.php/dmnSchools'    

        dropdownCollection.fetch({
            success: function (response) {
              console.log("Success fetch school dropdown!");
            },
            error: function(model,response,xhr) {
              console.log("Error fetch school dropdown");
              console.log(response);
              console.log(xhr);        
            }
        });   
      },

      render: function (){
        
        React.render(       
          React.createElement(CreateRunnerMaster, {collection: dropdownCollection}),
          this.el
        );
      } 
    });

    return CreateRunnerView;
  });


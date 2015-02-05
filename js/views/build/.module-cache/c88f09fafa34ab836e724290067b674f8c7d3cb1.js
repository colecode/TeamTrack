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
    var states_dropdownCollection;

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
                React.createElement("label", null, "State"), React.createElement("br", null), 
                React.createElement(DropdownContainer, {allDomains: this.props.statesCollection})
              ), 
              React.createElement("div", {className: "text-center"}, 
                React.createElement("button", {className: "btn btn-primary", onClick: this.handleSubmit}, "Submit")
              )
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

// <div className={"form-group"}>
//                 <label>School</label><br/>
//                 <DropdownContainer allDomains={this.props.collection} />
//               </div>

// <div className={'input-group'}>
//                 <span className={"input-group-addon"}><DropdownContainer allDomains={this.props.collection} /></span>
//                 <input type="text" className={"form-control"} value={this.props.schoolName} onChange={this.onSchoolNameChange} />
//               </div>

//               <input type="text" className={"form-control"} value={this.props.schoolName} onChange={this.onSchoolNameChange} />
    
    var CreateRunnerView = Backbone.View.extend({
    
      el: $('#mainContent'),
      events: {
      },

      initialize: function() {  

        // Get dmn_Schools
        // dropdownCollection = new DropdownCollection(); 
        // dropdownCollection.url = 'api/index.php/dmnSchools'    

        // dropdownCollection.fetch({
        //     success: function (response) {
        //       console.log("Success fetch school dropdown!");
        //     },
        //     error: function(model,response,xhr) {
        //       console.log("Error fetch school dropdown");
        //       console.log(response);
        //       console.log(xhr);        
        //     }
        // }); 

        // Get dmn_States
        states_dropdownCollection = new DropdownCollection(); 
        states_dropdownCollection.url = 'api/index.php/dmnStates'    

        states_dropdownCollection.fetch({
            success: function (response) {
              console.log("Success fetch states dropdown!");
            },
            error: function(model,response,xhr) {
              console.log("Error fetch states dropdown");
              console.log(response);
              console.log(xhr);        
            }
        });   
      },

      render: function (){
        
        React.render(       
          React.createElement(CreateRunnerMaster, {collection: states_dropdownCollection}),
          this.el
        );
      } 
    });

    return CreateRunnerView;
  });


define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'models/createTeamModel'
  ], function($, _, Backbone, React, backboneMixin, CreateTeamModel){

    var CreateTeamMaster = React.createClass({displayName: 'CreateTeamMaster',

      mixins: [backboneMixin],

      getInitialState: function () {
        return {
            teamName: ''  
        };
      },

      handleSubmit: function() {

        myTeam = new CreateTeamModel({'tName':this.state.teamName});
        
        myTeam.save(null, {
          success:function(model, response) {
            swal({title:"", text: "Successfully created new team!", type:"success", timer: 2000 });
          },
          error: function(model, error) {
            sweetAlert("Oops!", "An error occured while creating a new team!", "error");
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
                React.createElement("label", null, "Team Name"), 
                React.createElement("input", {type: "text", className: "form-control", value: this.props.teamName, onChange: this.onTeamNameChange})
              ), 
              React.createElement("div", {className: "text-center"}, 
                React.createElement("button", {className: "btn btn-primary", onClick: this.handleSubmit}, "Submit")
              )
            )
            )
          )
        )
      },

      onTeamNameChange: function (e) {
        this.setState({ teamName: e.target.value });
      }

    });
    
    var CreateTeamView = Backbone.View.extend({
    
      el: $('#mainContent'),
      events: {
      },

      initialize: function() {          
      },

      render: function (){
        
        React.render(       
          React.createElement(CreateTeamMaster, null),
          this.el
        );
      } 
    });

    return CreateTeamView;
  });


define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin'
  ], function($, _, Backbone, React, backboneMixin){

    var CreateTeamModel = Backbone.Model.extend({
      defaults: {
        tName: ""
      },
      url : 'api/index.php/teams'
    });

    // Holds the UI and data-bind
    var CreateTeamMaster = React.createClass({displayName: 'CreateTeamMaster',

      mixins: [backboneMixin],

      getInitialState: function () {
        return {
            teamName: ''  
        };
      },

      handleSubmit: function() {

        myTeam = new CreateTeamModel({'tName':this.state.teamName});
        console.log(myTeam);
        myTeam.save(null, {
          //wait:true,
          success:function(model, response) {
            console.log('Successfully saved!');
            console.log(response);
          },
          error: function(model, error) {
            console.log('error!!');
            console.log(model.toJSON());
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


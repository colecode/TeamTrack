define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'models/createTeamModel',
  'reactboot',
  'views/build/dropdownContainer'
  ], function($, _, Backbone, React, backboneMixin, CreateTeamModel, ReactBoot, DropdownContainer){

    var CreateTeamMaster = React.createClass({displayName: 'CreateTeamMaster',

      mixins: [backboneMixin],

      getInitialState: function () {
        return {
            teamName: '' ,
            dmnArray_Schools:[],
            dmnArray_States:[],
            schoolName: 'Select school',
            stateName:'Select state'
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

      handleSelect_dmnSchools: function(val) {
        this.setState({schoolName: val.selectedDomain });
      },

      handleSelect_dmnStates: function(val) {
        this.setState({ stateName: val.selectedDomain });

        // Load School dropdown after state is selected
        $.ajax({
          url:"api/index.php/dmnSchools",
          type:"GET",
          success:function(data){
            this.setState({dmnArray_Schools: data});
          }.bind(this), 
          error:function(err) {
            console.log('error retreivin school dropdown');
            console.log(err);
          },   
         dataType:"json"
        });

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

      componentDidMount: function() {
        this.loadDomainsFromServer();
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
              React.createElement("div", {className: "form-group"}, 
                React.createElement("label", null, "State"), React.createElement("br", null), 
                React.createElement(DropdownContainer, {dmnArray: this.state.dmnArray_States, menuTitle: this.state.stateName, onDomainSelect: this.handleSelect_dmnStates})
              ), 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("label", null, "School"), React.createElement("br", null), 
                React.createElement(DropdownContainer, {dmnArray: this.state.dmnArray_Schools, menuTitle: this.state.schoolName, onDomainSelect: this.handleSelect_dmnSchools})
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


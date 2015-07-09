define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot',
  ], function($, _, Backbone, React, backboneMixin, ReactBoot){

    var TeamBuilderClass = React.createClass({displayName: "TeamBuilderClass",

      mixins: [backboneMixin],
      mixins: [React.addons.LinkedStateMixin],

      handleSubmit: function() {

        
      },

      render: function() {

        var Button = ReactBoot.Button;

        return (

          React.createElement("div", null, 
            React.createElement("h3", null, "Team Builder"), 
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
      }
    });
    
    var TeamBuilderView = Backbone.View.extend({
    
      el: $('#mainContent'),
      events: {
        
      },

      initialize: function() { 
        
      },

      render: function (){
        
        React.render(       
          React.createElement(TeamBuilderClass, null),
          this.el
        );
      } 
    });

    return TeamBuilderView;
  });


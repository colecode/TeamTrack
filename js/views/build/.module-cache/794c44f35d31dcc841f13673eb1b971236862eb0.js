define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot',
  ], function($, _, Backbone, React, backboneMixin, ReactBoot){
    
    var schoolID = -1;

    var TeamCardClass = React.createClass({displayName: "TeamCardClass",

      mixins: [backboneMixin],

      getInitialState: function () {
        return {
            selectedRunners:[],
            allRunners:[]
        };
      },

       handleSelect: function(i) {
        $($("#myTable tbody tr")[i]).toggleClass("info");;
        
        // Index of object
        var a = this.props.selectedRunners.indexOf(this.props.allRunners[i]);
        
        // If object does not exist in array, add it
        if(a == -1)
        {
          this.props.selectedRunners.push(this.props.allRunners[i]); 
        }
        // Remove it
        else
        {
          this.props.selectedRunners.splice(a,1);
        }
              
      },

      loadListfromServer: function() {
        
        $.ajax({
          url:"api/index.php/runnersperschool",
          type:"GET",
          success:function(data){
            this.setState({allRunners: data});
          }.bind(this),     
          dataType:"json"
        });
      },

      componentDidMount: function() {
        //this.loadListfromServer();
      },

      render: function() {
       
        return (          
          React.createElement("div", null, 
          React.createElement("div", {className: 'input-group form-field-sizes'}, 
            React.createElement("input", {className: 'form-control text-center', type: "text", placeholder: "Team name", onChange: this.onFirstNameChange})
          ), 
          React.createElement("div", {className: 'input-group form-field-sizes'}, 
            React.createElement(DropdownContainer, {dmnArray: this.state.dmnArray_States, menuTitle: this.state.stateName, onDomainSelect: this.handleSelect_dmnStates})
          ), 
          React.createElement("div", {className: 'input-group form-field-sizes'}, 
            React.createElement(DropdownContainer, {disabled: this.state.disableDropdown, dmnArray: this.state.dmnArray_Schools, menuTitle: this.props.schoolName, onDomainSelect: this.handleSelect_dmnSchools})
          )
        )        
        )
      }

    });

    return TeamCardClass;

  });

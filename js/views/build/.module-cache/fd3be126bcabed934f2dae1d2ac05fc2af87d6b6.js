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


    var myParent = this;

    var CreateTeamClass = React.createClass({displayName: "CreateTeamClass",

      mixins: [backboneMixin],
      mixins: [React.addons.LinkedStateMixin],

      getInitialState: function () {
        return {
            teamName: '' ,
            dmnArray_Schools:[],
            dmnArray_States:[],
            schoolName: 'School',
            stateName:'State',
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

      handleSelect_dmnSchools: function(val) {

        this.props.onSchoolSelect({selectedDomain: val.selectedDomain.domainCode});

        //myParent.props.onDomainSelect({selectedDomain:this})
        //this.setState({schoolName: val.selectedDomain.children});
        //this.setState({schoolCode: val.selectedDomain.domainCode});
        
        // push selected school to teambuilder so it can properly load the simple-runner-table
        //this.props.selectedSchool.push(val.selectedDomain.domainCode); 
        // $.ajax({
        //   url:"api/index.php/getrunnersperschool/" + val.selectedDomain.domainCode,
        //   type:"GET",
        //   success:function(data){
        //     //this.props.schoolRunners.push(data);
        //     this.props.schoolRunners = data.slice();
        //   }.bind(this), 
        //   error:function(err) {

        //     console.log('error building runners list based on school selection');
        //     console.log(err);
        //   },    
        //   dataType:"json"
        // });




      },

      handleSelect_dmnStates: function(val) {
        this.setState({ stateName: val.selectedDomain.children});
        this.setState({ schoolName: 'Select school' });
        
        // Load School dropdown after state is selected
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

      handleSubmit: function() {

        myTeam = new CreateTeamModel({'tName':this.state.teamName, 'sCode':this.state.schoolCode});
        myParent = this;

        myTeam.save(null, {
          success:function(model, response) {
            var str = "#selectrunners/" + response;
            //swal({title:"", text: "Successfully created new team!", type:"success", timer: 2000 }); 

            // Go to 'Select runners' page
            window.location.href = str;
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

        var Button = ReactBoot.Button;
        var ButtonGroup = ReactBoot.ButtonGroup;

        var btnBlockBuffer = {paddingTop: 100};
        var myWidth = $(".wrap").width() / 2;
        var wrapWidth = {width:myWidth};

        var myParent = this;

        function selectedDomainVal() {
          myParent.props.onDomainSelect({selectedDomain:this})
        }
        
        return (
        
        React.createElement("div", null, 
          React.createElement("div", {className: 'input-group form-field-sizes'}, 
            React.createElement("input", {className: 'form-control text-center', type: "text", placeholder: "Team name", valueLink: this.linkState('teamName')})
          ), 
          React.createElement("div", {className: 'input-group form-field-sizes'}, 
            React.createElement(DropdownContainer, {dmnArray: this.state.dmnArray_States, menuTitle: this.state.stateName, onDomainSelect: this.handleSelect_dmnStates})
          ), 
          React.createElement("div", {className: 'input-group form-field-sizes'}, 
            React.createElement(DropdownContainer, {disabled: this.state.disableDropdown, dmnArray: this.state.dmnArray_Schools, menuTitle: this.state.schoolName, onDomainSelect: this.handleSelect_dmnSchools})
          )
        )
  
        )
    }
      

    });
    
    // var CreateTeamView = Backbone.View.extend({
    
    //   el: $('#mainContent'),
    //   events: {
    //   },

    //   initialize: function() {          
    //   },

    //   render: function (){
        
    //     React.render(       
    //       <CreateTeamMaster/>,
    //       this.el
    //     );
    //   } 
    // });

    return CreateTeamClass;
  });


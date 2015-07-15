define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot',
  'views/build/createteam',
  'views/build/createrunner',
  'views/build/simple-runners-table'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot, CreateTeam, CreateRunner, SimpleRunnersTable){

    var TeamBuilderClass = React.createClass({displayName: "TeamBuilderClass",

      mixins: [backboneMixin],
      mixins: [React.addons.LinkedStateMixin],

      getInitialState: function () {
        return {
            selectedRunners:[],
            allRunners:[],
            schoolRunners: []
        };
      },

      handleClick: function() {
        console.log('test');
        var testArr = [];
        testArr = this.state.schoolRunners.splice();
        
      },

      handleSchoolSelect: function(val) {
        this.setState({schoolName: val.selectedDomain.children});
        this.setState({schoolCode: val.selectedDomain.domainCode});
        
        // push selected school to teambuilder so it can properly load the simple-runner-table
        //this.props.selectedSchool.push(val.selectedDomain.domainCode); 
        $.ajax({
          url:"api/index.php/getrunnersperschool/" + val.selectedDomain,
          type:"GET",
          success:function(data){
            //this.props.schoolRunners.push(data);
            this.setState({allRunners: data.slice() }) ;
          }.bind(this), 
          error:function(err) {

            console.log('error building runners list based on school selection');
            console.log(err);
          },    
          dataType:"json"
        });




      },

      render: function() {
        var Button = ReactBoot.Button;
        return (
          React.createElement("div", null, 
            React.createElement("div", {className: 'wrap'}, 
              React.createElement(CreateTeam, {onSchoolSelect: this.handleSchoolSelect}), 
              React.createElement(SimpleRunnersTable, {selectedRunners: this.state.selectedRunners, allRunners: this.state.schoolRunners}), 
              React.createElement(Button, {onClick: this.handleClick}, " POST ")
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

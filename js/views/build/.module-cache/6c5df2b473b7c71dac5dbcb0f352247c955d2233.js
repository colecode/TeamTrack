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
  'views/build/simple-runners-table',
  'views/build/team-card'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot, CreateTeam, CreateRunner, SimpleRunnersTable, TeamCard){

    var TeamBuilderClass = React.createClass({displayName: "TeamBuilderClass",

      mixins: [backboneMixin],
      mixins: [React.addons.LinkedStateMixin],

      getInitialState: function () {
        return {
            selectedRunners:[],
            allRunners:[],
            teamName: '',
            schoolName: ''
        };
      },

      handleSchoolSelect: function(val) {
        
        this.setState({schoolCode: val.selectedDomain.domainCode});
        this.setState({schoolName: val.selectedDomain.children});

        $.ajax({
          url:"api/index.php/getrunnersperschool/" + val.selectedDomain.domainCode,
          type:"GET",
          success:function(data){
            this.setState({allRunners: data.slice() }) ;
          }.bind(this), 
          error:function(err) {
            console.log('error building runners list based on school selection');
            console.log(err);
          },    
          dataType:"json"
        });
      },

      handleTeamNameUpdate: function(val) {
        this.setState({teamName:val.teamName});
      },

      handleStateNameUpdate: function(val) {
        this.setState({stateName:val.stateName});
      },


      render: function() {
        var Grid = ReactBoot.Grid;
        var Row = ReactBoot.Row;
        var Col = ReactBoot.Col;

        return (
          React.createElement("div", null, 
            React.createElement("div", {className: 'wrap'}, 

              React.createElement(Grid, null, 
                React.createElement(Row, {className: "show-grid"}, 
                  React.createElement(Col, {xs: 12, md: 8}, 
                    React.createElement(CreateTeam, {onSchoolSelect: this.handleSchoolSelect, onTeamNameUpdate: this.handleTeamNameUpdate, onStateNameUpdate: this.handleStateNameUpdate})
                  )
                ), 
                React.createElement(Row, {className: "show-grid"}, 
                  React.createElement(Col, {xs: 6, md: 4}, 
                    React.createElement(SimpleRunnersTable, {selectedRunners: this.state.selectedRunners, allRunners: this.state.allRunners})
                  ), 
                  React.createElement(Col, {xs: 6, md: 4}, 
                    React.createElement(CreateRunner, {schoolCode: this.state.schoolCode})
                  )
                ), 
                React.createElement(Row, {className: "show-grid"}, 
                  React.createElement(Col, {xs: 12, md: 8}, 
                    React.createElement(TeamCard, {teamName: this.state.teamName, schoolName: this.state.schoolName, stateName: this.state.stateName})
                  )
                )
              )
              
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


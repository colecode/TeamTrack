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
  'views/build/team-card',
  'models/create-team-model',
  'models/team-roster-model'
  
  ], function($, _, Backbone, React, backboneMixin, ReactBoot, CreateTeam, CreateRunner, SimpleRunnersTable, TeamCard, CreateTeamModel, TeamRosterModel){

    var TeamBuilderClass = React.createClass({displayName: "TeamBuilderClass",

      mixins: [backboneMixin],
      mixins: [React.addons.LinkedStateMixin],

      getInitialState: function () {
        return {
            selectedRunners:[],
            allRunners:[],
            teamName: '',
            schoolName: '',
            schoolCode: -1
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

      handleSubmit: function() {
        var myParent = this;
        var myTeam = new CreateTeamModel({'teamName':this.state.teamName, 'fk_schoolID':this.state.schoolCode, 'fk_coachID':3});
        
        myTeam.save(null, {
          success:function(model, response) {

            console.log('success! now populating TeamRoster....');

            // Loop through all selected runners and insert into TeamRoster table
            for (var i = myParent.state.selectedRunners.length - 1; i >= 0; i--) {
          
              var tmp = myParent.state.selectedRunners[i];
              var myRoster = new TeamRosterModel({'fk_teamID':response, 'fk_runnerID':tmp.runnerID});

              myRoster.save(null, {
                success:function(model, response) {
                  console.log('successfully added runner to roster!');
                },
                error: function(model, error) {
                  console.log(error);
                }
              });
            };

          },
          error: function(model, error) {
            
            console.log(error);
          }
        });   
      },

      render: function() {
        var Grid = ReactBoot.Grid;
        var Row = ReactBoot.Row;
        var Col = ReactBoot.Col;
        var Button = ReactBoot.Button;

        var colStyle = {marginRight:130};
        var headerStyle = {width:250, marginBottom:50};

        return (
          React.createElement("div", null, 
            React.createElement("div", {className: 'wrap'}, 
              React.createElement(Grid, null, 
                React.createElement(Row, {className: "show-grid"}, 
                React.createElement("h4", null, "Enter Team Info"), 
                  React.createElement(Col, {className: "no-padding", xs: 12, md: 8}, 
                    React.createElement(CreateTeam, {onSchoolSelect: this.handleSchoolSelect, onTeamNameUpdate: this.handleTeamNameUpdate, onStateNameUpdate: this.handleStateNameUpdate})
                  )
                ), 
                React.createElement(Row, {className: "show-grid"}, 
                  React.createElement(Col, {className: "no-padding", style: colStyle, xs: 7, md: 5}, 
                    React.createElement("h4", null, "Select Runners"), 
                    React.createElement(SimpleRunnersTable, {selectedRunners: this.state.selectedRunners, allRunners: this.state.allRunners})
                  ), 
                  React.createElement(Col, {className: "no-padding", xs: 4, md: 2}, 
                    React.createElement("h4", {style: headerStyle}, "Create New Runner"), 
                    React.createElement(CreateRunner, {schoolCode: this.state.schoolCode})
                  )
                )
              ), 
              React.createElement("div", {id: "teamBuildSubmitBtn"}, 
              React.createElement(Button, {bsStyle: "info", bsSize: "large", block: true, onClick: this.handleSubmit}, "Finish")
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


//<TeamCard teamName={this.state.teamName} schoolName={this.state.schoolName} stateName={this.state.stateName} selectedRunners={this.state.selectedRunners} />

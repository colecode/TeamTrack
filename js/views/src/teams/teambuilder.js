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

    var TeamBuilderClass = React.createClass({

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

      handleClick: function() {
        console.log('test');
        var testArr = [];
        testArr = this.state.schoolRunners.splice();
        
      },

      handleSchoolSelect: function(val) {
        this.setState({schoolName: val.selectedDomain.children});
        this.setState({schoolCode: val.selectedDomain.domainCode});
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

      handleCreateRunner: function() {
        
        $.ajax({
          url:"api/index.php/getrunnersperschool/" + this.state.schoolCode,
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
        console.log(val);
        this.setState({teamName:val.teamName});
      },

      handleStateNameUpdate: function(val) {
        console.log(val);
        this.setState({stateName:val.stateName});
      },


      render: function() {
        var Button = ReactBoot.Button;
        return (
          <div>
            <div className={'wrap'}>   
              <CreateTeam onSchoolSelect={this.handleSchoolSelect} schoolName={this.state.schoolName} onTeamNameUpdate={this.handleTeamNameUpdate} onStateNameUpdate={this.handleStateNameUpdate} />
              <SimpleRunnersTable selectedRunners={this.state.selectedRunners} allRunners={this.state.allRunners}/>
              <CreateRunner schoolCode={this.state.schoolCode} handleCreateRunner={this.handleCreateRunner} />
              <Button onClick={this.handleClick}> POST </Button>
              <TeamCard teamName={this.state.teamName} schoolName={this.state.schoolName} stateName={this.state.stateName} />
            </div>
          </div>
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
          <TeamBuilderClass/>,
          this.el
        );
      } 
    });

    return TeamBuilderView;
  });


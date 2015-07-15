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
  'mdl'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot, CreateTeam, CreateRunner, SimpleRunnersTable, TeamCard, MDL){

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
          <div>
            <div className={'wrap'}>   
              <Grid>
                <Row className='show-grid'>
                <h3>Enter Team Info</h3>
                  <Col className='no-padding' xs={12} md={8}>
                    <CreateTeam onSchoolSelect={this.handleSchoolSelect} onTeamNameUpdate={this.handleTeamNameUpdate} onStateNameUpdate={this.handleStateNameUpdate} />
                  </Col>
                </Row>
                <Row className='show-grid'>
                <h3>Select Runners</h3>
                  <Col className='no-padding' xs={8} md={6}>
                    <SimpleRunnersTable selectedRunners={this.state.selectedRunners} allRunners={this.state.allRunners}/>
                  </Col>
                  <Col className='no-padding' xs={4} md={2}>
                    <CreateRunner schoolCode={this.state.schoolCode} />
                  </Col>
                </Row>
              </Grid>
              <TeamCard teamName={this.state.teamName} schoolName={this.state.schoolName} stateName={this.state.stateName} />
              <button className={'mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-js-ripple-effect'}>MDL</button>
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


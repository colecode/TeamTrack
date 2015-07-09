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

    var TeamBuilderClass = React.createClass({

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

      render: function() {
        var Button = ReactBoot.Button;
        return (
          <div>
            <div className={'wrap'}>   
              <CreateTeam schoolRunners={this.state.schoolRunners} />
              {this.state.schoolRunners}
              <SimpleRunnersTable selectedRunners={this.state.selectedRunners} allRunners={this.state.schoolRunners}/>
              <Button onClick={this.handleClick}> POST </Button>
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


define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'views/build/my-teams-table',
  'views/build/tm-runners-table'
  ], function($, _, Backbone, React, backboneMixin, MyTeamsTable, TMRunnersTable){


    var TeamManagerClass = React.createClass({

      mixins: [backboneMixin],

      getInitialState: function () {
        return {
          teamRunners: []
        };
      },

      handleTeamSelect: function(val) {
        //<MyTeamsTable onTeamSelect={this.handleTeamSelect}/>
        //<TMRunnersTable teamRunners={this.state.teamRunners}/>
        $.ajax({
          url:"api/index.php/getrunnersperteam/" + val,
          type:"GET",
          success:function(data){            
            this.setState({teamRunners: data});
          }.bind(this),     
          dataType:"json"
        });

      },

      render: function() {

        return (
            <div className={'container'}>   
                <div className={"row row-padding"}>
                  <div className={"col-md-12 centered"}>
                    <h4>My Teams</h4>
                    <MyTeamsTable onTeamSelect={this.handleTeamSelect}/>
                  </div>
                </div>
                <div className={"row row-padding"}>
                  <div className={"col-md-12 centered"}>
                    <h4>Select Runners</h4>
                    <TMRunnersTable teamRunners={this.state.teamRunners}/>
                  </div>
                </div>
            </div>
        )
      }
    });
    
    var TeamManagerView = Backbone.View.extend({
    
      el: $('#mainContent'),
      events: {
        
      },

      initialize: function() { 
        
      },

      render: function (){
        
        React.render(       
          <TeamManagerClass/>,
          this.el
        );
      } 
    });

    return TeamManagerView;
  });



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


    var TeamManagerClass = React.createClass({displayName: "TeamManagerClass",

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
            React.createElement("div", {className: 'container'}, 
                React.createElement("div", {className: "row row-padding"}, 
                  React.createElement("div", {className: "col-md-12 centered"}, 
                    React.createElement("h4", null, "My Teams"), 
                    React.createElement(MyTeamsTable, {onTeamSelect: this.handleTeamSelect})
                  )
                ), 
                React.createElement("div", {className: "row row-padding"}, 
                  React.createElement("div", {className: "col-md-12 centered"}, 
                    React.createElement("h4", null, "Select Runners"), 
                    React.createElement(TMRunnersTable, {teamRunners: this.state.teamRunners})
                  )
                )
            )
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
          React.createElement(TeamManagerClass, null),
          this.el
        );
      } 
    });

    return TeamManagerView;
  });



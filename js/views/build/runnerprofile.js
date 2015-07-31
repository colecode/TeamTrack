define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot',
  'fixeddatatable',
  'views/build/racestable',
  'views/build/splitstable',
  'views/build/runner-teams-table',
  'views/build/runner-profile-child'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot, FixedDataTable, RacesTable, SplitsTable, RunnerTeamsTable, Profile){

    var parentID = -1;
    
    var RunnerProfileView = Backbone.View.extend({
    
      el: $('#mainContent'),
      events: {
        
      },

      initialize: function(options) { 

          if(options)
          {
            parentID= options.runnerId;
          }
        },

      render: function (){
        
        var myID = parentID;

        React.render(       
          React.createElement(Profile, {runnerID: myID}),
          this.el
        );
      } 
    });

    return RunnerProfileView;
  });



define([
  'jquery',
  'underscore',
  'backbone',
  'views/build/list' 
], function($, _, Backbone, TeamListView){
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'team': 'showTeam',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;


    var index = function() {
      console.log('TEST!!!');
    }


    app_router.on('route:showTeam', function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/teams/list'
      var teamListView = new TeamListView();
      teamListView.render();

    });
   
    app_router.on('route:defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });

    Backbone.history.start();

  };
  return {
    initialize: initialize
  };
});
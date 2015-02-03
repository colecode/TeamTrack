define([
  'jquery',
  'underscore',
  'backbone',
  'views/build/runnerlistmaster',
  'views/build/teamexample',
  'views/build/createrunner',
  'views/build/createteam'
], function($, _, Backbone, RunnerList, TeamExample, CreateRunner, CreateTeam){
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'team': 'showTeam',

      'example': 'showExample',

      'createrunner' : 'createRunner',

      'createteam' : 'createTeam',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;

    app_router.on('route:createRunner', function(){
      
      var createRunner = new CreateRunner();
      createRunner.render();

    });

    app_router.on('route:createTeam', function(){
      
      var createTeam = new CreateTeam();
      createTeam.render();

    });

    app_router.on('route:showTeam', function(){
      
      var runnerList = new RunnerList();
      runnerList.render();

    });

    app_router.on('route:showExample', function(){
      
      var teamExample = new TeamExample();
      teamExample.render();

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
define([
  'jquery',
  'underscore',
  'backbone',
  'views/build/runnerlistmaster',
  'views/build/teamexample',
  'views/build/createrunner',
  'views/build/createteam',
  'views/build/home',
  'views/build/selectRunners'
], function($, _, Backbone, RunnerList, TeamExample, CreateRunner, CreateTeam, HomePage, SelectRunners){
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'runnerslist': 'showRunners',

      'selectrunners/:id': 'selectRunners',

      'createrunner' : 'createRunner',

      'createteam' : 'createTeam',

      'home' : 'homePage',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;

    app_router.on('route:homePage', function(){
      
      var homePage = new HomePage();
      homePage.render();

    });

    app_router.on('route:createRunner', function(){
      
      var createRunner = new CreateRunner();
      createRunner.render();

    });

    app_router.on('route:createTeam', function(){
      
      var createTeam = new CreateTeam();
      createTeam.render();

    });

    app_router.on('route:showRunners', function(){
      
      var runnerList = new RunnerList();
      runnerList.render();

    });

    app_router.on('route:selectRunners', function(id){

      var selectrunners = new SelectRunners({teamId: id});
      selectrunners.render();

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
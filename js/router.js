define([
  'jquery',
  'underscore',
  'backbone',
  'views/build/runnerlistmaster',
  'views/build/createrunner',
  'views/build/createteam',
  'views/build/home',
  'views/build/selectRunners',
  'views/build/myteams',
  'views/build/sandbox'
], function($, _, Backbone, RunnerList, CreateRunner, CreateTeam, HomePage, SelectRunners, MyTeams, Sandbox){
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      
      'runnerslist': 'showRunners',

      'selectrunners/:id': 'selectRunners',

      'createrunner' : 'createRunner',

      'createteam' : 'createTeam',

      'home' : 'homePage',

      'myteams' : 'myTeams',

      'sandbox' : 'sandBox',

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

    app_router.on('route:myTeams', function(id){

      var myteams = new MyTeams();
      myteams.render();

    });

    app_router.on('route:sandBox', function(id){

      var sandbox = new Sandbox();
      sandbox.render();

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
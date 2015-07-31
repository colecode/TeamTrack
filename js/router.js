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
  'views/build/sandbox',
  'views/build/runnerprofile',
  'views/build/racesummary',
  'views/build/team-builder',
  'views/build/team-manager'
], function($, _, Backbone, RunnerList, CreateRunner, CreateTeam, HomePage, SelectRunners, MyTeams, Sandbox, RunnerProfile, RaceSummary, TeamBuilder, TeamManager){
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      
      'runnerslist': 'showRunners',

      'selectrunners/:id': 'selectRunners',

      'createrunner' : 'createRunner',

      'createteam' : 'createTeam',

      'home' : 'homePage',

      'runnerprofile/:id' : 'runnerProfile',

      'sandbox' : 'sandBox',

      'racesummary/:id' : 'raceSummary',

      'teambuilder' : 'teamBuilder',

      'teammanager' : 'teamManager',

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

    app_router.on('route:runnerProfile', function(id){

      var runnerprofile = new RunnerProfile({runnerId: id});
      runnerprofile.render();

    });

    app_router.on('route:teamManager', function(  ){

      var teamManager = new TeamManager();
      teamManager.render();

    });

    app_router.on('route:sandBox', function(id){

      var sandbox = new Sandbox();
      sandbox.render();

    });

    app_router.on('route:raceSummary', function(id){

      var raceSummary = new RaceSummary({raceID: id});
      raceSummary.render();

    });

    app_router.on('route:teamBuilder', function(){

      var teamBuilder = new TeamBuilder();
      teamBuilder.render();

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
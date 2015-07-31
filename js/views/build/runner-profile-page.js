define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'views/build/runner-profile-component'
  ], function($, _, Backbone, React, backboneMixin, RunnerProfileComponent){

    var parentID = -1;

    var RunnerProfileClass = React.createClass({displayName: "RunnerProfileClass",

      getInitialState: function() {
        return {
          generalData:[],
          racesPerRunner:[],
          teamsPerRunner:[],
        };
      },

      loadDataFromServer: function() {
        
        // Populate general runner profile data
        $.ajax({
          url:"api/index.php/getprofile/" + parentID,
          type:"GET",
          success:function(data){       
            this.setState({generalData: data[0]});     
            // this.setState({firstName: data[0].firstName});
            // this.setState({lastName: data[0].lastName});
            // this.setState({schoolName: data[0].schoolName});
            // this.setState({stateName: data[0].stateName});
          }.bind(this),     
          dataType:"json"
        });

        // Populate profile races table
        $.ajax({
          url:"api/index.php/getraces/" + parentID,
          type:"GET",
          success:function(data){            
            this.setState({racesPerRunner: data});  
          }.bind(this),     
          dataType:"json"
        });

        // Populate profile teams table
        $.ajax({
          url:"api/index.php/getteamsperrunner/" + parentID,
          type:"GET",
          success:function(data){            
            this.setState({teamsPerRunner: data});  
          }.bind(this),     
          dataType:"json"
        });

      },

      componentDidMount: function() {
        this.loadDataFromServer();
      },

      render: function() {
        return (
          React.createElement(RunnerProfileComponent, {generalData: this.state.generalData, racesPerRunner: this.state.racesPerRunner, teamsPerRunner: this.state.teamsPerRunner})
        )
      }

    });
    
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
        
        React.render(       
          React.createElement(RunnerProfileClass, null),
          this.el
        );
      } 
    });

    return RunnerProfileView;
  });



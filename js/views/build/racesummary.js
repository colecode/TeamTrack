define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'backbonemixin',
  'reactboot',
  'views/build/racesummarytable'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot, RaceSummaryTable){

    var raceID = -1;

    var RaceSummaryClass = React.createClass({displayName: "RaceSummaryClass",

      mixins: [backboneMixin],
      mixins: [React.addons.LinkedStateMixin],

      getInitialState: function () {
        return {
            raceName: '',
            raceDate: '',
            selectedRunner:[],
            runnersForRace:[]
        };
      },

      loadDataFromServer: function() {
        
        $.ajax({
          url:"api/index.php/getruninrace/" + raceID,
          type:"GET",
          success:function(data){            
            this.setState({runnersForRace: data});  
          }.bind(this),     
          dataType:"json"
        });

      },

      componentDidMount: function() {
        this.loadDataFromServer();
      },

      render: function() {

        return (

          React.createElement("div", {className: 'left-align-container'}, 
          React.createElement("div", null, 
            React.createElement("h3", null, this.state.raceName), 
            React.createElement("h4", null, this.state.raceDate), 
            React.createElement("h4", null, this.state.eventName)
          ), 
          React.createElement("div", {id: "race-summary-box"}, 
            React.createElement(RaceSummaryTable, {runners: this.state.runnersForRace})
          )
          )
        )
      }

    });
    
    var RaceSummaryView = Backbone.View.extend({
    
      el: $('#mainContent'),
      events: {
        
      },

      initialize: function(options) { 

          if(options)
          {
            raceID = options.raceID;
          }
        },

      render: function (){
        
        React.render(       
          React.createElement(RaceSummaryClass, null),
          this.el
        );
      } 
    });

    return RaceSummaryView;
  });


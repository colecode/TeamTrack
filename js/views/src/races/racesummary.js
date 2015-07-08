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

    var RaceSummaryClass = React.createClass({

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

          <div className={'left-align-container'}>
          <div>
            <h1>Race Results</h1>
            <h3>{this.state.raceName}</h3>
            <h4>{this.state.raceDate}</h4>
            <h4>{this.state.eventName}</h4>
          </div>
          <div id="race-summary-box">
            <RaceSummaryTable runners={this.state.runnersForRace} />      
          </div>
          </div>
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
          <RaceSummaryClass/>,
          this.el
        );
      } 
    });

    return RaceSummaryView;
  });


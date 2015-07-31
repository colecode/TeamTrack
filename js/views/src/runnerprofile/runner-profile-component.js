define(
  [
  'jquery',
  'underscore',
  'backbone',
  'react',
  'views/build/races-table',
  'views/build/splits-table',
  'views/build/runner-teams-table'
  ], function($, _, Backbone, React, RacesTable, SplitsTable, RunnerTeamsTable){

    var RunnerProfileComponent = React.createClass({


      getInitialState: function () {
        return {
            selectedRace:[],
            allSplits: []
        };
      },

      handleRaceSelect: function(val) {
          
          $.ajax({
            url:"api/index.php/getsplits/" + val,
            type:"GET",
            success:function(data){            
              this.setState({allSplits: data});  
            }.bind(this),     
            dataType:"json"
          });
      },


      render: function() {

        return (

          <div className={'container'}>   
                <div className={"row row-padding"}>
                  <div className={"col-md-12 centered"}>
                      <h4>Runner Description</h4>
                      <p>Name: {this.props.generalData.firstName} {this.props.generalData.lastName}</p>
                      <p>State: {this.props.generalData.stateName}</p> 
                      <p>School: {this.props.generalData.schoolName}</p>                  
                  </div>
                </div>
                <div className={"row row-padding"}>
                  <div className={"col-md-12 centered"}>
                    <h4>Team Affiliations</h4>  
                    <RunnerTeamsTable runnerTeams={this.props.teamsPerRunner} />
                  </div>
                </div>
                <div className={"row row-padding"}>
                  <div className={"col-md-12 centered"}>
                    <h4>Races</h4>
                    <RacesTable onRaceSelect={this.handleRaceSelect} selectedRace={this.state.selectedRace} races={this.props.racesPerRunner} /> 
                  </div>
                </div>
                <div className={"row row-padding"}>
                  <div className={"col-md-12 centered"}>
                    <h4>Splits</h4>  
                    <SplitsTable allSplits={this.state.allSplits} />
                  </div>
                </div>
            </div>
        )
      }

    });
  
    return RunnerProfileComponent;
  
  });




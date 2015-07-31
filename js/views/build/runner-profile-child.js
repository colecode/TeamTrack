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
  'views/build/runner-teams-table'
  ], function($, _, Backbone, React, backboneMixin, ReactBoot, FixedDataTable, RacesTable, SplitsTable, RunnerTeamsTable){

    var RunnerProfileClass = React.createClass({displayName: "RunnerProfileClass",

      mixins: [backboneMixin],

      getInitialState: function () {
        return {
            firstName: '',
            lastName: '',
            age: '',  
            stateName:'',
            schoolName: '',
            races:[], 
            selectedRace:[],
            allRaces:[],
            allSplits: [],
            runnerTeams: []
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

      loadDataFromServer: function() {

        var runnerID = this.props.runnerID;
        
        $.ajax({
          url:"api/index.php/getprofile/" + runnerID,
          type:"GET",
          success:function(data){            
            this.setState({firstName: data[0].firstName});
            this.setState({lastName: data[0].lastName});
            this.setState({schoolName: data[0].schoolName});
            this.setState({stateName: data[0].stateName});
          }.bind(this),     
          dataType:"json"
        });

        $.ajax({
          url:"api/index.php/getraces/" + runnerID,
          type:"GET",
          success:function(data){            
            this.setState({allRaces: data});  
          }.bind(this),     
          dataType:"json"
        });

        $.ajax({
          url:"api/index.php/getteamsperrunner/" + runnerID,
          type:"GET",
          success:function(data){            
            this.setState({runnerTeams: data});  
          }.bind(this),     
          dataType:"json"
        });

      },

      componentDidMount: function() {
        this.loadDataFromServer();
      },

      render: function() {

        var Grid = ReactBoot.Grid;
        var Row = ReactBoot.Row;
        var Col = ReactBoot.Col;
        var Button = ReactBoot.Button;
        var Thumbnail = ReactBoot.Thumbnail;

        var colStyle = {marginRight:130};
        var headerStyle = {width:250, marginBottom:20};

        return (

          React.createElement("div", null, 
            React.createElement("div", {className: 'wrap'}, 
              React.createElement(Grid, null, 
                React.createElement(Row, {className: "show-grid"}, 

                  React.createElement(Col, {className: "no-padding"}, 
                      React.createElement("h4", null, "Runner Description"), 
                      React.createElement("p", null, "Name: ", this.state.firstName, " ", this.state.lastName), 
                      React.createElement("p", null, "State: ", this.state.stateName), 
                      React.createElement("p", null, "School: ", this.state.schoolName)
                  )
                ), 
                React.createElement(Row, null, 
                React.createElement(Col, {className: "no-padding", xs: 4, md: 2}, 
                    React.createElement("h4", null, "Team Affiliations"), 
                    React.createElement(RunnerTeamsTable, {runnerTeams: this.state.runnerTeams})
                  )
                ), 
                React.createElement(Row, {className: "show-grid"}, 
                  React.createElement(Col, {className: "no-padding", style: colStyle, xs: 7, md: 5}, 
                    React.createElement("h4", null, "Races"), 
                    React.createElement(RacesTable, {onRaceSelect: this.handleRaceSelect, selectedRace: this.state.selectedRace, races: this.state.allRaces})
                  ), 
                  React.createElement(Col, {className: "no-padding", xs: 4, md: 2}, 
                    React.createElement("h4", {style: headerStyle}, "Splits"), 
                    React.createElement(SplitsTable, {allSplits: this.state.allSplits})
                  )
                )
              )
            )
          )
        )
      }

    });
  
    return RunnerProfileClass;
  
  });



